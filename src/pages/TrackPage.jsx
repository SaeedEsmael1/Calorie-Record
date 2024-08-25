import { useEffect, useState } from "react";
import FormInputs from "../Components/FormInputs/FormInputs";
import FilterDates from "../Components/CalorieTracer/FilterDates";
import Modal from "../Components/Modal/Modal";
// import {} from "react-router-dom";

const RECORDS_LOCALSTORAGE_NAME = 'records';

export function TrackPage() {
  const [records, setRecord] = useState();



  const addNewrecord = (newRecord)=> {
    const formattedRecord = {
      ...newRecord,
      date:newRecord.date,
      id:crypto.randomUUID(),
      calories:Number(newRecord.calories),
    }
    setRecord(prev => [formattedRecord, ...prev]);
  }

  const save = ()=> localStorage.setItem(RECORDS_LOCALSTORAGE_NAME,JSON.stringify(records));
  
  const loadRecords = ()=> {
    const areThereRecords = localStorage.getItem(RECORDS_LOCALSTORAGE_NAME);
    if(areThereRecords != null && areThereRecords !== 'undefined') {
      setRecord(JSON.parse(areThereRecords).map(record=> {
        return {...record, date: new Date(record.date)}
      }));
    } else {
      setRecord([]);
    }
  }

  useEffect(()=> {
    if(!records) {
      loadRecords();
    } else {
      save();
    }
  }, [records])

  // Modal

  const [isOpen, setIsOpen] = useState(false);
  const openModal = ()=> setIsOpen(true);
  const closeModal = ()=> setIsOpen(false);
  return (
    <>
      <button className="add-record" onClick={openModal}> Add New Record </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
        >
          <FormInputs 
            addNewrecord={addNewrecord}
            setIsOpen={setIsOpen}
          />
        </Modal>

        { records && 
          <FilterDates 
            records={records} 
            setRecord={setRecord}
          />
        }

    </>
  )
}