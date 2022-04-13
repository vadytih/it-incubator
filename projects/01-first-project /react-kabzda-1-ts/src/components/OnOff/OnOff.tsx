
type OnOffType = {
    value: boolean
}

export const OnOff = (props: OnOffType) => {
    const RenderOn = () => {
        return (
            <div className="wrapper">
                <div className='box-block green'>On</div>
                <div className='box-block dark-red'>Off</div>
                <div className='krug green'/>
            </div>
        )
    }
    const RenderOff = () => {
        return (
            <div className="wrapper">
                <div className='box-block dark-green'>On</div>
                <div className='box-block red'>Off</div>
                <div className='krug red'/>
            </div>
        )
    }

    return (
        <>
            { props.value && <RenderOn/>}
            { !props.value && <RenderOff/>}
        </>
    )
}