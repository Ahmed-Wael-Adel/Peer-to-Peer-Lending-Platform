
function LenderInfo(props){
    return(
        <div className="LenderInfo">
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading" />
            <span>{props.username}</span>
            <span>{props.email}</span>
        </div>
    )
}

export default LenderInfo;