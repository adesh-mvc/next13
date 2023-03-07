"use client"


export default function CheckBoxChecked(actionHandler) {
    console.log('actionHandler', actionHandler)
return <input className="form-check-input" type="checkbox" onClick={actionHandler} data-kt-check="true"  defaultValue={1} />
}