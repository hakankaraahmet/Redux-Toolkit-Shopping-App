import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addProduct } from "../../features/addSlice";
import { getCategories } from '../../features/categorySlice';


interface FormValues {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    createdAt: any;
    avatar: string;
    developerEmail: string;
  }

const AddPage = () => {
    const { categories } = useAppSelector((state) => state?.categories);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialValues: FormValues = {
        id: Date.now(),
        name: "",
        description: "",
        price: "",
        category: "",
        createdAt: Date.now(),
        avatar: "",
        developerEmail: "karaahmethkn@gmail.com",
      };

      useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]);

  return (
    <div className="flex flex-col w-full pt-16 text-center lg:w-1/2">
    <h3 className="text-2xl font-medium">Create Product</h3>
    <Formik
      initialValues={initialValues}
      onSubmit={async(values) => {
        await dispatch(addProduct(values));
        navigate("/");
      }}
    >
      <Form>
        <div className="w-full mt-12">
          <div className="w-full p-2">
            <Field
              className="block w-full p-4 text-gray-500 bg-white border-none appearance-none rounded-xl focus:outline-none focus:bg-gray-100"
              id="name"
              name="name"
              placeholder="Product name"
            />
          </div>
          <div className="w-full p-2">
              <Field
                as="textarea"
                className="block w-full h-40 p-4 text-gray-500 bg-white border-none appearance-none resize-none rounded-xl focus:outline-none focus:bg-gray-100"
                placeholder="Description"
                id="description"
                name="description"
              />
            </div>
          <div className="w-full p-2">
            <Field
              className="block w-full p-4 text-gray-500 bg-white border-none appearance-none rounded-xl focus:outline-none focus:bg-gray-100"
              id="avatar"
              name="avatar"
              placeholder="image URL"
            />
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <Field
                as="select"
                className="block w-full p-4 text-gray-500 bg-white border-none appearance-none rounded-xl focus:outline-none focus:bg-gray-100"
                id="category"
                name="category"
              >
                <option value="All">Categories</option>
                {categories?.map((category: any) => (
                  <option key={category?.id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </Field>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full p-2">
            <Field
              className="block w-full p-4 text-gray-500 bg-white border-none appearance-none rounded-xl focus:outline-none focus:bg-gray-100"
              id="price"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="w-full p-2">
            <button
              type="submit"
              className="block w-full p-4 text-gray-500 bg-white border-none appearance-none rounded-xl active:bg-green-800 hover:scale-[1.2]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  </div>
  )
}

export default AddPage