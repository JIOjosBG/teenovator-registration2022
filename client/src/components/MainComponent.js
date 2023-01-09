import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/Main.module.scss';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={styles.textField}>
            <label className={styles.textLabel} htmlFor={props.id || props.name}>{label}</label>
            <input className={styles.textInput} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={styles.textField}>
            <label className={styles.textLabel} htmlFor={props.id || props.name}>{label}</label>
            <select className={styles.selectInput} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={styles.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

const MainComponent = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    projectName: '',
                    town: '',
                    clubNumber:''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(2, 'Най-малко 2 символа са нужни!')
                        .required('Задължително поле!'),
                    lastName: Yup.string()
                        .min(3, 'Най-малко 3 символа са нужни!')
                        .required('Задължително поле!'),
                    projectName: Yup.string()
                        .required('Задължително поле!'),
                    town: Yup.string()
                        .required('Задължително поле!'),
                    clubNumber: Yup.number()
                        .required('Задължително поле!'),
                })}
                onSubmit={async (values) => {
                    console.log("NE PIPAI TUK AUTIST")
                    const a = await fetch('http://localhost:8000/api/create/', {
                        method: 'POST', 
                        mode: 'cors',
                        headers: {
                          'Content-Type': 'application/json'
                          // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "firstName": values.firstName,
                            "lastName": values.lastName,
                            "project": values.projectName,
                            "clubNumber": values.clubNumber,
                            "city": values.town
                        })

                    });

                    console.log(a)
                    if(a.status==200){
                        window.location.reload(true)
                    }
                    
                }}>
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <TextInput
                            label="Име"
                            name="firstName"
                            type="text" />

                        <TextInput
                            label="Фамилия"
                            name="lastName"
                            type="text" />

                        <TextInput
                            label="Име на проект"
                            name="projectName"
                            type="text" />
                        <TextInput
                            label="Номер на клуб"
                            name="clubNumber"
                            type="number" />
                        <SelectField label="Град" name="town">
                            <option value="">Изберете град</option>
                            <option value="Sofia">София</option>
                            <option value="Plovdiv">Пловдив</option>
                            <option value="Blagoevgrad">Благоевград</option>
                            <option value="Stara Zagora">Стара Загора</option>
                            <option value="Varna">Варна</option>
                            <option value="Gotze Delchev">Гоце Делчев</option>
                            <option value="Burgas">Бургас</option>
                            <option value="Dobrich">Добрич</option>
                            <option value="Pleven">Плевен</option>
                            <option value="Ruse">Русе</option>
                            <option value="Montana">Монтана</option>
                            <option value="Vratsa">Враца</option>
                            <option value="Pazardzhik">Пазарджик</option>
                            <option value="Panagyurishte">Панагюрище</option>
                            <option value="Kyustendil">Кюстендил</option>
                            <option value="Karnobat">Карнобат</option>
                            <option value="Svoge">Своге</option>
                            <option value="Troyan">Троян</option>
                            <option value="Yakoruda">Якоруда</option>
                            <option value="Vidin">Видин</option>
                            <option value="Peshtera">Пещера</option>
                            <option value="Kyustendil">Кюстендил</option>
                            <option value="Yambol">Ямбол</option>
                            <option value="Pernik">Перник</option>
                            <option value="Kazanlak">Казанлък</option>
                            <option value="Gorna Oryahovitsa">Горна Оряховица</option>
                            <option value="Haskovo">Хасково"</option>
                        </SelectField>

                        <button className={styles.button}
                            type='submit'
                            disabled={isSubmitting}>
                            Регистрирай се!
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default MainComponent;