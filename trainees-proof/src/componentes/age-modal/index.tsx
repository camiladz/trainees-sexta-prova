import { ChangeEvent, useEffect, useState } from 'react';
import './styles.css'
import { useAgeModal } from '../../hooks';
import classNames from 'classnames'

export const AgeModal = () => {

    const { updateUserBirthDate, openModal, closeModal } = useAgeModal()
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDay(event.target.value);
    };

    const handleMonthChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMonth(event.target.value);
    };

    const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value);
    };

    useEffect(() => {
        if (day && month && year) {
            const userBirthDate = new Date(Number(year), Number(month), Number(day))

            updateUserBirthDate(userBirthDate.getTime())
        }
    }, [day, month, year])

    return <div className={classNames('ageModal', { 'ageModal--open': openModal })}>

        <h1 className="modalTitle">Olá! Que bom te ver aqui.</h1>
        <span className="modalText">Para continuar, informe a sua data de nascimento</span>
        <div className="ageSelector">
            <div className="ageSelectorInput">
                <input type="number" placeholder='Dia' value={day} onChange={handleDayChange} className='dayInput' />
                <input type="number" placeholder='Mês' value={month} onChange={handleMonthChange} className='monthInput' />
                <input type="number" placeholder='Ano' value={year} onChange={handleYearChange} className='yearInput' />
            </div>
            <button className="confirmButton" onClick={closeModal} disabled={!day || !month || !year}> Acessar loja</button>
        </div>
    </div>
}