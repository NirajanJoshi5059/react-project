import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../features/store';

const HomePage = () => {
    const { data } = useSelector((stor) => store)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            todo: '',
            user: "",
            email: '',
        },
        onSubmit: (val, { resetForm }) => {

            resetForm();

        }
    });

    return (
        <div className='p-5'>
            <h1 className='text-2xl'>Sample Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='space-y-2'>
                    <label htmlFor='username'>UserName</label>
                    <br />
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.user}
                        name="username"
                        id='username'
                        type="text"
                        className='border border-black outline-none px-2 py-1' />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        name="email"
                        id='email'
                        type="email"
                        className='border border-black outline-none px-2 py-1' />
                </div>
                <button type="submit">Submit</button>

                {data.map((d, i) => {
                    return <div key={i} className="shadow-md p-5 max-w-xs flex justify-between">
                        <h1 className="text-3xl">{d}</h1>
                        <button type="button" className="text-red-600"><i className="fa-solid fa-trash"></i></button>
                        {/* <button onClick={() => dispatch(removeData(i))} type="button" className="text-red-600"><i className="fa-solid fa-trash"></i></button> */}
                    </div>
                })}
            </form>
        </div>
    )
}

export default HomePage

