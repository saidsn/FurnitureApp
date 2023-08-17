import React from 'react';
import IconButton from '../../utils/buttons/iconbutton/IconButton';
import styles from './MainHeader.module.scss';

const MainHeader = () => {
    return (
        <div className="container">
            <div className="main-header">
                <div className="main-header__left">
                    <h1 className='main-header__left--title'>THE FURNITURE THAT DEFINES YOU</h1>
                    <p className='main-header__left--description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    <IconButton />
                </div>
                <div className="main-header__right">
                    <div className="main-header__right--image">
                        <img style={{ borderRadius: '1rem' }} src="https://s3-alpha-sig.figma.com/img/ae4c/9e23/ba8849252aece8c4c38500429ce2f28b?Expires=1692576000&Signature=NoNlgGQemAOyIFOwPePAx4vLLslw6BWXmyK8CdPn4gStkOhXfur54bJcSYsBy0AHyYeCQm0EQJGbS1CjQpbY7mFeZkfNpX4Fvm6wcj8TMTKnGhGECNtfFKD1mpRfWMb5kq-ABoxPazxoHn92~iHtpKngio-PMyODE3Acid~DPuWJ65qAcuUZbu0nD3II5vzp7QuCb8syZ7cip-36~cRvBcQpf4n~4yb2mfsXQczAFuuR1Jr87LdDJ7vtQu1TxWUZGk7B5a3IFJTyXF4xHYn4rMnaBn831WF1yumPQKSuPpHnfWNa6cxlV92WOlEaPepXUGxt6kVh9zBLxo6t8CGGzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;