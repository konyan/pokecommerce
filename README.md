# Requirements
node: 16.15.0 (use nvm)
# Run

# Test

# Guide

# How to run commands
## Create new lib
```
nx g @nrwl/react:lib {lib name} --directory={directory name}
```

## Create new component inside library
```
nx g @nrwl/react:component {component name} --project={project name}
```

## Generate story book
```
nx g @nrwl/react:storybook-configuration {project name}
```

## Running story book
Right now story book is configured to pick up all the storybook config into one story book. To run a single storybook run the first command or run the second command for all story books.
```
nx run shared-storybook:{project name} 
```
or
```
yarn storybook
```
