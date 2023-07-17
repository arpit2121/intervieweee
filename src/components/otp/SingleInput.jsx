import React, {memo, useRef, useLayoutEffect} from 'react';
import usePrevious from '../../hooks/usePrevious'

const SingleInputComponent = (props) => {
    const {focus, autoFocus, ...rest} = props;
    const inputRef = useRef(null);
    const prevFocus = usePrevious(!!focus);
    useLayoutEffect(()=>{
        if(inputRef.current) {
            if(focus && autoFocus) {
                inputRef.current.focus();
            }
            if(focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus();
                inputRef.current.select();
            }
        }
    }, [autoFocus, focus, prevFocus]);
    
  return <input ref={inputRef} {...rest} style={{width:'10px',marginLeft:'10px', padding:'1rem 1.25rem', borderRadius:'1.125rem', border:'1px solid var(--fields-stroke-focused, #605DEC)', backgroundColor:'var(--fields-form, #F7F7FD)'}}></input>
}

const SingleOtpInput = memo(SingleInputComponent)
export default SingleOtpInput;