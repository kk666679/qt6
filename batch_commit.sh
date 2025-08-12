#!/bin/bash

BATCH_SIZE=100
BATCH_COUNT=1

# Pull latest changes first
echo "Pulling latest changes..."
git pull origin $(git branch --show-current)

# Get all files that need to be committed (modified, new, deleted)
FILES=($(git status --porcelain | awk '{print $2}'))
TOTAL_FILES=${#FILES[@]}

if [ $TOTAL_FILES -eq 0 ]; then
    echo "No files to commit."
    exit 0
fi

echo "Found $TOTAL_FILES files to process in batches of $BATCH_SIZE"

# Process files in batches
for ((i=0; i<$TOTAL_FILES; i+=BATCH_SIZE)); do
    BATCH_FILES=("${FILES[@]:$i:$BATCH_SIZE}")
    
    echo "Processing batch $BATCH_COUNT (${#BATCH_FILES[@]} files)..."
    
    # Add files to staging
    git add "${BATCH_FILES[@]}"
    
    # Commit the batch
    git commit -m "Batch commit $BATCH_COUNT: ${#BATCH_FILES[@]} files"
    
    # Tag the batch
    TAG_NAME="batch-$BATCH_COUNT-$(date +%Y%m%d-%H%M%S)"
    git tag -a "$TAG_NAME" -m "Batch $BATCH_COUNT commit tag"
    
    echo "Created commit and tag: $TAG_NAME"
    
    # Push the commit and tag
    git push origin $(git branch --show-current)
    git push origin "$TAG_NAME"
    
    echo "Pushed batch $BATCH_COUNT"
    
    ((BATCH_COUNT++))
done

echo "All batches processed successfully!"