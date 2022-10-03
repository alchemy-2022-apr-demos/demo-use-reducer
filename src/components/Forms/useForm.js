import { useEffect, useState } from 'react';

function getValue(target) {
  return target.type === 'checkbox' ? target.checked : target.value;
}

export function useForm(formData) {
  const [data, setData] = useState(formData ?? {});

  useEffect(() => {
    setData(formData ?? {});
  }, [formData]);

  const handleChange = ({ target }) => {
    setData((data) => ({
      ...data,
      [target.name]: getValue(target),
    }));
  };

  return [data, handleChange];
}
