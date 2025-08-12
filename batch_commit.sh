#!/bin/bash

BATCH_SIZE=100
BATCH_NUM=1

# Pull latest changes first
echo "Pulling latest changes..."
git pull origin $(git branch --show-current) || echo "Pull failed, continuing..."

# Get all untracked and modified files
FILES=($(git status --porcelain | grep -E '^(\?\?|.M|M.|A.|.A|D.|.D)' | cut -c4-))

if [ ${#FILES[@]} -eq 0 ]; then
    echo "No files to commit"
    exit 0
fi

echo "Found ${#FILES[@]} files to process"

# Process files in batches
for ((i=0; i<${#FILES[@]}; i+=BATCH_SIZE)); do
    BATCH_FILES=("${FILES[@]:$i:$BATCH_SIZE}")
    
    echo "Processing batch $BATCH_NUM (${#BATCH_FILES[@]} files)..."
    
    # Add files to staging
    for file in "${BATCH_FILES[@]}"; do
        git add "$file"
    done
    
    # Commit batch
    COMMIT_MSG="Batch commit $BATCH_NUM: ${#BATCH_FILES[@]} files"
    git commit -m "$COMMIT_MSG"
    
    # Tag the batch
    TAG_NAME="batch-$BATCH_NUM-$(date +%Y%m%d-%H%M%S)"
    git tag -a "$TAG_NAME" -m "Batch $BATCH_NUM commit tag"
    
    echo "Created commit and tag: $TAG_NAME"
    
    ((BATCH_NUM++))
done

# Push all commits and tags
echo "Pushing commits and tags..."
git push origin $(git branch --show-current)
git push origin --tags

echo "Batch commit process completed!"