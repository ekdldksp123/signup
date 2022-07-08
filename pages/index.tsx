import type { NextPage } from 'next'
import classNames from 'classnames/bind';
import styles from '../styles/index.module.scss';
import { Router, useRouter } from 'next/router';
import { useEffect, useLayoutEffect } from 'react';
import { useMember } from '../src/libs/store.module';
import { LinkButton } from '../src/components/atom/ButtonGroup';

const Main: NextPage = () => {
  const router = useRouter()
  const { isMember, setIsMember } = useMember()

  const cn = classNames.bind(styles);

  return (
    <main>
      <div className={cn("context")}>
        { isMember ? 
          <LinkButton onClick={() => setIsMember()}>Sign out</LinkButton> 
          :
          <LinkButton onClick={() => router.push('/signup')}>Sign in</LinkButton>
        }
        <h1>Hello It's CRAA</h1>
      </div>
      <div className={cn("area")} >
          <ul className={cn("circles")}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div >
    </main>
  )
}

export default Main


