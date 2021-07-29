import React, { useState } from 'react'

export const Progress = () => {
    const [progress, setprogress] = useState({ paid: 100, process: 30, payment: 10 })
    const [data, setData] = useState({ balance: 20000, processing: 30, available: 65000 })
    const dragProgress = (e) => {
        console.log(e.target.getAttribute("class"))
        console.log(Math.round(((e.clientX - 120) / 416) * 100))
        const handleMouseMove = (event) => {
            console.log(event.clientX)
            if (e.target.getAttribute("class") == "procprogress") {
                let newProgress = { ...progress }
                newProgress.process = Math.round(((event.clientX - 120) / 416) * 100)

                setprogress(newProgress)
            }
            if (e.target.getAttribute("class") == "paymentprogress") {
                let newProgress = { ...progress }
                newProgress.payment = Math.round(((event.clientX - 120) / 416) * 100)
                setprogress(newProgress)
            }
        }
        const handleMouseup = (event) => {
            console.log("handleMouseup")
            window.removeEventListener('mousemove', handleMouseMove)
        }
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseup)

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="paidprogress" onMouseDown={(e) => { dragProgress(e) }}>
                        <div className="procprogress" style={{ width: `${progress.process}%` }}>
                            <div className="paymentprogress" style={{ width: `${progress.payment}%` }} >
                                {progress.payment}%
                            </div>
                            {progress.process}%
                        </div>
                        <span className="paid">{progress.process + progress.payment}%</span>
                    </div>
                    <div className="status mt-3">
                        <p>Payments Due <span className="paymentBox"></span></p>
                        <p>Processing <span className="procesBox"></span></p>
                        <p>Paid <span className="paidBox"></span></p>
                    </div>
                </div>
                <div className="col">
                    <div className="paidprogress">
                        <div className="procprogress" style={{ width: `${progress.process}%` }}>
                            <div className="paymentprogress" style={{ width: `${progress.payment}%` }}>

                            </div>
                        </div>
                    </div>
                    <div className="status mt-3">
                        <p>${data.balance} Balance</p>
                        <p>${data.processing} Processing </p>
                        <p>${data.available} Aailable </p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
