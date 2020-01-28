import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (removeTodo) => {
    return({
        removeTodo: (id) => removeTodo(id),
    })
};

export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView)