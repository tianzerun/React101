
### State
- React handles state updates using the previous state. 
- So, in order for React to tell there is a state change, we need to construct an updated state without mutating the previous state.

- `useState()` returns a list of two values. 
    - The first value is the latest snapshot of the state.
    - The second value is a **function** which can be used to update the state.
        - If the updated state does not depend on the previous state, we can simply pass the new state into the **function**.

e.g. The `setCourseGoals()` function takes in a function which automatically receives the latest state, so we only need to care about how to construct the updated state.
```javascript
const [courseGoals, setCourseGoals] = useState([{id: 1, text: 'Finish the course'}]);

const addNewGoalHandler = (newGoal) => {
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
};
```
Note: `setCourseGoals(courseGoals.concat(newGoal));` can achieve the same effects when the state does not change rapidly. However, it is not as safe as the above approach because ...