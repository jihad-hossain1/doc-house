
//get all doctors
export const getAllDcotors = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/doctors`);
    const data = await response.json()
    return data;
}

//get a doctor
export const getDoctor = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/doctor/${id}`
    );
    const data = await response.json()
    return data;
}