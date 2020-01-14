import { appendById, loadJSON } from '../../utils';
import createEmployeesList  from '../TeamEmployees';

loadJSON( './data/employees.json' )
    .then( (employees) => {
        if (Array.isArray( employees )) {
            appendById( 'teams', createEmployeesList( employees ) );
        }
    } );