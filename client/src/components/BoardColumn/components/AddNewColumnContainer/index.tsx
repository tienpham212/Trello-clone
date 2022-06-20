/* eslint-disable react/jsx-pascal-case */
import React, {FC, useState} from 'react'
import Input from '../../../Input'
import {useSpring, animated, useTransition} from "react-spring";
import styled from "styled-components";

//CSS
import styles from "../../BoardColumn.module.css";
import {AiOutlinePlus} from "react-icons/ai";
import {FaRegWindowClose} from "react-icons/fa";
import { Button } from '../../../Button';

const AddNewColumnContainer:FC = () => {

    const [isAddSectionOpen, setisAddSectionOpen] = useState(false)

    const transition = useTransition(isAddSectionOpen, {
      from: {y: -2, opacity: 0},
      enter: {y: 0, opacity: 1},
      leave: {y: -10, opacity: 0},
      config: {
        duration: 50,
      },
    });

    const handleAddClick = () => {
        setisAddSectionOpen(!isAddSectionOpen);
    }

  return (
    <>
      <div className={styles.addListInputWrapper}>
        <div>
          {isAddSectionOpen ? (
            <div className={styles.addListInput}>
                <Input/>
            </div>
          ) : (
            <div className={styles.addListContainer} onClick={handleAddClick}>
              <AiOutlinePlus/> Add another
            </div>
          )}
        </div>
        {transition((style, item) => {
          return (
            <div>
              {item ? (
                <animated.div className={styles.buttons} style={style}>
                  <Button>Add Card</Button>
                  {/* <div onClick={handleAddClick} className={styles.icon}> */}
                  <FaRegWindowClose
                    onClick={handleAddClick}
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
}

export default AddNewColumnContainer