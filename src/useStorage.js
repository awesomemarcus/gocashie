import { useState, useEffect } from 'react';

export default (state) => {
  const localStorage = window.localStorage;
  
  const localState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : state;
  
  return {
    localState
  }
}