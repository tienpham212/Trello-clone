/* eslint-disable react/jsx-pascal-case */
import React, {FC, useCallback, useEffect, useState} from 'react'
import Input from '../../../Input'
import {useSpring, animated, useTransition} from "react-spring";
import styled from "styled-components";

//CSS
import styles from "../../BoardColumn.module.css";
import {AiOutlinePlus} from "react-icons/ai";
import {FaRegWindowClose} from "react-icons/fa";
import { Button } from '../../../Button';
import { addNewColumn } from '../../../../redux/features/boardSlice';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {addColumnThunk} from "../../../../redux/thunks/collumnThunk";

import { useDebouncedCallback } from 'use-debounce';
import {v4 as uuidv4} from "uuid";
import { IColumn } from '../../../../types/IColumn';

interface AddNewColumnContainerProps extends ConnectedProps<typeof connector>{

}

const AddNewColumnContainer: FC<AddNewColumnContainerProps> = ({
  addNewColumn,
  addColumnThunk,
}) => {
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setisAddSectionOpen(false);
      setColumnTitle("");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const [isAddSectionOpen, setisAddSectionOpen] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<string>("");

  const transition = useTransition(isAddSectionOpen, {
    from: {y: -2, opacity: 0},
    enter: {y: 0, opacity: 1},
    leave: {y: -10, opacity: 0},
    config: {
      duration: 50,
    },
  });

  const handleAddToggle = () => {
    setisAddSectionOpen(!isAddSectionOpen);
    setColumnTitle("");
  };

  const handleAddSubmit = () => {

    const column: IColumn = {
      id: uuidv4(),
      cardOrder: [],
      title: columnTitle,
    };
    addNewColumn({column});
    debounced(columnTitle);
    setColumnTitle("");
    setisAddSectionOpen(false);
  };

  const debounced = useDebouncedCallback(
    // function
    (columnTitle) => {
      addColumnThunk(columnTitle);
    },
    // delay in ms
    5000
  );

  const handleInput = (e) => {
    const {name, value} = e.target;
    setColumnTitle(value);
  };

  const handleAddSubmitOnEnter = (e) => {
    if (e.key === "Enter") {
      handleAddSubmit();
    }
  };

  return (
    <>
      <div className={styles.addListInputWrapper}>
        <div>
          {isAddSectionOpen ? (
            <div className={styles.addListInput}>
              <Input
                onChange={handleInput}
                name="columnTitle"
                value={columnTitle}
                onKeyDown={handleAddSubmitOnEnter}
              />
            </div>
          ) : (
            <div className={styles.addListContainer} onClick={handleAddToggle}>
              <AiOutlinePlus /> Add another
            </div>
          )}
        </div>
        {transition((style, item) => {
          return (
            <div>
              {item ? (
                <animated.div className={styles.buttons} style={style}>
                  <Button onClick={handleAddSubmit}>Add Card</Button>
                  {/* <div onClick={handleAddToggle} className={styles.icon}> */}
                  <FaRegWindowClose
                    onClick={handleAddToggle}
                    className={styles.icon}
                  />
                  {/* </div> */}
                </animated.div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapState = (state: RootState) => ({

})

const mapDispatch = {
  addNewColumn,
  addColumnThunk,
};

const connector = connect(mapState, mapDispatch) ; 

export default connector(AddNewColumnContainer);