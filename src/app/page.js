import styles from "./page.module.css";
import Image from 'next/image';

function StudentID(props) {
  //props
  let 
  {
    number,
    lastName,
    firstName,
    middleName,
    faculty,
    studyForm,
    orderNumber,
    enterDate,
    date,
    year,
    month,
    homerSignature,
    rectorName,
    rectorSignature,
    backColor
  } = props;

  let ticketStyles = 
  {
    backgroundColor: backColor,
    border: "2px solid black",
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "left",
  };

  return (
    <div style={ticketStyles}>
      <h1 style={{ textAlign: "center" }}>СТУДЕНЧЕСКИЙ БИЛЕТ № {number}</h1>
      <p>Фамилия: {lastName}</p>
      <p>Имя: {firstName}</p>
      <p>Отчество: {middleName}</p>
      <p>Факультет: {faculty}</p>
      <p>Форма обучения: {studyForm}</p>
      <p>Зачислен приказом от " {enterDate} " {month} 20{year} г. № {orderNumber}</p>
      <p>Дата выдачи: " {date} " {month} 20{year} г.</p>
      <p>Подпись студента: {homerSignature}</p>
      <div style={{
        width: "150px",
        height: "200px",
        border: "1px dashed #000",
        margin: "20px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Чтобы изображение не выходило за границы
      }}>
        <Image
          src="/homer.png" 
          alt="Фото студента"
          width={150}
          height={200}
          style={{ objectFit: "cover" }} // Чтобы изображение заполниило область
        />
      </div>
      <p><strong>Ректор:</strong> {rectorName}</p>
      <p>(подпись: {rectorSignature})</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <StudentID
        number = {1234567890}
        lastName="Симсон"
        firstName="Гомер"
        middleName="Джей"
        faculty="Атомная физика"
        studyForm="Очная"
        orderNumber="123USA"
        enterDate="1"
        date="1"
        year = "25"
        month = "марта"
        homerSignature ="HJS"
        rectorName="Сидоров И.П."
        rectorSignature = "СиДоРоВ"
        backColor="lightgrey"
      />
    </div>
  );
}