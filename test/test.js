import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log('Form data', values);
        },
        validate: values => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } // add more validation logic as needed
            return errors;
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm;
