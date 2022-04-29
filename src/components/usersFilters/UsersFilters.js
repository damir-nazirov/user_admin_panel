import LinkButton from '../../containers/LinkButton';
import './usersFilters.scss'

const UsersFilters = () => {

    return (
        <div className="usersFilters">
            <div className="">
                <h2 className="usersFilters__header">Сортировка</h2>
                <div className="">

                    <LinkButton linkValue='cityFilter'>по городу </LinkButton>
                    <LinkButton linkValue='nameFilter'>по имени</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default UsersFilters;

