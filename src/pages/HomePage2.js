import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../features/infoSlice';

const HomePage = () => {

    // const data1 = useSelector((store) => store);
    // const data2 = useSelector((store) => store.todos);
    const { data } = useSelector((store) => store.todos);
    console.log(data)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',

        },
        onSubmit: (val, { resetForm }) => {
            dispatch(addData(val.username));
            resetForm();
        }


    });
    return (
        <div className='p-5'>
            <h1 className='text-2xl px-16'>Form </h1>
            <form onSubmit={formik.handleSubmit} >
                <div className='space-y-2'>
                    <label htmlFor='username'>UserName</label>
                    <br />
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        className='border border-black outline-none px-2 py-1' type='text' name='username' id='username' />
                </div>


                <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input onChange={formik.handleChange}
                        value={formik.values.email}
                        className='border border-black outline-none px-2 py-1' type='email' name='email' id='email' />
                </div>
                <br />

                <button className='border border-black px-2 ' type='submit'>Submit</button>


                {data.map((d, i) => {
                    return <div key={i} className='shadow-md p-5 flex justify-between max-w-md'>
                        <h1 className='text-3xl'> {d}</h1>
                        <button type='submit' className='text-red-600'><i className='fa-solid fa-trash'></i></button>
                    </div>
                })}
            </form>

        </div>

    )
}
// {i + 1}{d.title}
export default HomePage
