cmake_minimum_required(VERSION 3.21)
project(QtAutomotive VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_AUTOMOC ON)

find_package(Qt6 REQUIRED COMPONENTS Core Widgets)

add_executable(QtAutomotive ../src/QtAutomotive.cpp)

target_link_libraries(QtAutomotive PRIVATE Qt6::Core Qt6::Widgets)