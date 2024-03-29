import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from '../store/mutations';
import { Link } from 'react-router-dom';
export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        
            <h2>{name}</h2>
        <div>
        { tasks.map(task => (
            <Link to={`/task/${task.id}`} key={task.id}>
            <div>{ task.name } { task.id}</div>
            </Link>
            
        ))}
        </div>
       <button onClick={ ()=>createNewTask(id) }>Add New Task</button>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(
            task => task.group === groupID
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            createNewTask(id){
                   console.log("creating new tasks", id); 
                   dispatch(requestTaskCreation(id));
            }
        }
}
export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList);