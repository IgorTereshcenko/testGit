
const LimitPage = ({per_page,setPer_page}) => {

    const options = [
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'все'}
    ]

    return (
        <div>
            <select
                value={per_page}
                onChange = {(e) => setPer_page(e.target.value)}>
                    {options.map(option =>
                        <option 
                            key={option.value} 
                            value={option.value}>
                                {option.name}
                        </option>
                )}
            </select>
        </div>
    )
}

export default LimitPage;