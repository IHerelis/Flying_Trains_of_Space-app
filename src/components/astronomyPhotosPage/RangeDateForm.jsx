import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import './RangeDateForm.css';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { rangeGalaxyPhotos } from '../../thunks/galaxyPhotosThunks';



const RangeDateForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    startDate: '',
    endDate: '',
  }

  const submitHandler = (values, formikBag) => {
    dispatch(rangeGalaxyPhotos(values));
    formikBag.resetForm();
  }

  const RangeDateSchema = Yup.object().shape({
    startDate: Yup.date()
      .required('start date required !')
      .min(new Date(2017, 0, 1), 'Out the min date range !')
      .max(new Date(), 'Out the max date range !')
      ,
    endDate: Yup.date()
      .min(new Date(2017, 0, 1), 'Out the min date range !')
      .max(new Date(), 'Out the max date range !')
      ,
  });



  return (
    <div className='range-form__container'>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={RangeDateSchema} 
      >
        { () => (<Form>

            <div className='range-form__body'>
              <div className='form__body__place'>
                <label>start Date</label>
                <Field type="date" name='startDate' />
              </div>
              <ErrorMessage name="startDate" component="div" className='range-form-error' />
              <div className='form__body__place'>
                <label>end Date</label>
                <Field type="date" name='endDate' />
              </div>
              <ErrorMessage name="endDate" component="div" className='range-form-error' />
              <div className='form__body__submit'>
                <button type='submit'>submit</button>
              </div>
            </div>

          </Form>
        )}

      </Formik>
      
    </div>
  );
}

export default RangeDateForm;
