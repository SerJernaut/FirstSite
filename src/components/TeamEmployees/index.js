import createUserCard from './components/EmployeeCard';

export default function (employees) {
    const teamContainerElem = document.getElementById('teamContainer');

    employees.forEach( employee => {
        teamContainerElem.appendChild( createUserCard( employee ) );
    } );
    return teamContainerElem;
}





