- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components give us access to methods that allow to control the component lifecycle. This gives us more control on how the component works.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount() - This is called when the component is first rendered to the dom, and can be used to fetch data to assign to state.

    componentDidUpdate() - This is called when the component updates, can be used to operate on the dom. 

    shouldComponentUpdate() - This is called when new state is recieved, but before it is rendered. This allows you to prevent the component from rendering on this update. 

- [ ] What is the purpose of a custom hook?

    It allows you to perform stateful logic and non-visual behavior inside of a hook.

- [ ] Why is it important to test our apps?

    To ensure when making changes we don't break the application. We want to make sure there are no bugs when the app is shipped. Automated testing makes this process easier to find and identify bugs as they arise. 