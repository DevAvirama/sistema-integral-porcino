import { useState } from 'react'

function useFormFields(initialValues) {
  const [fields, setFields] = useState(initialValues)

  function handleChange(event) {
    const { name, value } = event.target
    setFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }))
  }

  return {
    fields,
    setFields,
    handleChange,
  }
}

export default useFormFields
