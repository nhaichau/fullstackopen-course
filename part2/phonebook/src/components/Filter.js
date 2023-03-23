const Filter = (props) => {
    return (
        <div>
            Filter contact name with: <input value={props.filter} onChange={props.handleFilter} />
        </div>
    )
}

export default Filter