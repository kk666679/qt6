cmake_minimum_required(VERSION 3.21)
project(MATMOTOFIX-Dyno VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_AUTOMOC ON)

# Debug Configuration
if(CMAKE_BUILD_TYPE STREQUAL "Debug")
    set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -g -O0 -DDEBUG")
    if(MSVC)
        set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} /Zi /Od /MDd")
        # Enable AddressSanitizer on MSVC
        set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /fsanitize=address")
    else()
        set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -fsanitize=address -fno-omit-frame-pointer")
    endif()
endif()

# Enable static analysis with clang-tidy if available
find_program(CLANG_TIDY_EXE NAMES "clang-tidy")
if(CLANG_TIDY_EXE)
    set(CMAKE_CXX_CLANG_TIDY "${CLANG_TIDY_EXE}")
endif()

find_package(Qt6 REQUIRED COMPONENTS Core Widgets)

# Main Application
add_executable(MATMOTOFIX-Dyno
    src/main.cpp
    src/Application.cpp
    src/OSAccess.cpp
    src/PlatformAccess.cpp
)

# Qt Automotive Interface
add_executable(QtAutomotive
    src/QtAutomotive.cpp
)

target_link_libraries(MATMOTOFIX-Dyno PRIVATE Qt6::Core Qt6::Widgets)
target_link_libraries(QtAutomotive PRIVATE Qt6::Core Qt6::Widgets)

# Qt deployment
if(WIN32)
    find_program(WINDEPLOYQT_EXECUTABLE windeployqt HINTS ${Qt6_DIR}/../../../bin)
    if(WINDEPLOYQT_EXECUTABLE)
        install(CODE "execute_process(COMMAND ${WINDEPLOYQT_EXECUTABLE} \${CMAKE_INSTALL_PREFIX}/bin/MATMOTOFIX-Dyno.exe)")
        install(CODE "execute_process(COMMAND ${WINDEPLOYQT_EXECUTABLE} \${CMAKE_INSTALL_PREFIX}/bin/QtAutomotive.exe)")
    endif()
endif()

# Install targets
install(TARGETS MATMOTOFIX-Dyno QtAutomotive 
    RUNTIME DESTINATION bin
    LIBRARY DESTINATION lib
    ARCHIVE DESTINATION lib
)

# Install resources
install(DIRECTORY resources/ DESTINATION share/MATMOTOFIX-Dyno/resources)
install(FILES assets/motodynopro.desktop DESTINATION share/applications)

# CPack configuration
set(CPACK_PACKAGE_NAME "MATMOTOFIX-Dyno")
set(CPACK_PACKAGE_VERSION "1.0.0")
set(CPACK_PACKAGE_VENDOR "MotoDynoPro Technologies")
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "Professional Dyno Software")
set(CPACK_PACKAGE_INSTALL_DIRECTORY "MATMOTOFIX-Dyno")
set(CPACK_RESOURCE_FILE_LICENSE "${CMAKE_SOURCE_DIR}/../LICENSE")

# Platform-specific packaging
if(WIN32)
    set(CPACK_GENERATOR "NSIS")
    set(CPACK_NSIS_DISPLAY_NAME "MATMOTOFIX-Dyno")
    set(CPACK_NSIS_PACKAGE_NAME "MATMOTOFIX-Dyno")
    set(CPACK_NSIS_CONTACT "support@motodynopro.com")
    set(CPACK_NSIS_MODIFY_PATH ON)
elseif(APPLE)
    set(CPACK_GENERATOR "DragNDrop")
else()
    set(CPACK_GENERATOR "DEB;RPM")
    set(CPACK_DEBIAN_PACKAGE_MAINTAINER "MotoDynoPro Technologies")
    set(CPACK_RPM_PACKAGE_LICENSE "Proprietary")
endif()

include(CPack)