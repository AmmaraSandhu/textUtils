import React from 'react'

export const Alert = (props) => {
    // const capitalize = (word) => {
    //   const lower = word.toLowerCase();
    //   return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <>
            {/* it means if this is false then the next code will not evaluate and if its true then next code will evaluate */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> {props.alert.msg}
                
            </div>
        </>
    )
}
