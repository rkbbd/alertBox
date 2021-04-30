# alertBox

<img src="https://coders-destination.blogspot.com/favicon.ico" />   alertBox is a javascript library for developing javascripts's popup boxes.

### Installation
We suggest all to include this plug-in after loading Dom.

### Usage
alertBox can be initialised with a single line of Javascript:

```python
alertBox.success('Success Message');
```

### Browser support
all javascript supported/enabled browser are supported.

### Demo
Check out the documentation at https://github.com/rkbbd/alertBox/tree/master/AlertBox

### Documentation
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### Configuration Settings:
```python
alertBox.config({
    _duration: 500,
    _iterations: 1,
    _easing: "cubic-bezier(0.99, 0, 0.58, 1)", //"linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)".
    _timeout: 2000,
    _position: "rightBottom" //rightBottom, leftBottom topRight topLeft
})
```

##### success:
```python
alertBox.success('Success Message');
```
##### error:
```python
alertBox.error('Error Message');
```
##### warning:
```python
alertBox.warning('Warning Message');
```
##### message:
```python
alertBox.message('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
```

##### inline settings:[message,timeOut,position]
```python
alertBox.success('Success Message',1000,'topLeft');
```

Dependencies 
==========
None.

Community Contribution
==========
If you want to help and provide a patch for a bugfix or new feature, please take a few minutes and e-mail us (rakib424@gmail.com). In particular check out the Coding standards and Commit Message Style Guide.

In general, fork the project, create a branch for a specific change and send a pull request for that branch. Don't mix unrelated changes. You can use the commit message as the description for the pull request.


------
Contact: [rakib424@gmail.com](mailto:rakib424@gmail.com)
