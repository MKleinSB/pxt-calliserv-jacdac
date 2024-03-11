namespace modules {
    /**
     * CalliServ Servoboard Servo at Pin C16
     */
    //% fixedInstance whenUsed block="Calliserv C16"
    export const CalliServ0 = new ServoClient("Calliserv0?dev=self&srvo=0&name=C16")

    /**
      * CalliServ Servoboard Servo at Pin C17
      */
    //% fixedInstance whenUsed block="Calliserv C17"
    export const CalliServ1 = new ServoClient("Calliserv1?dev=self&srvo=1&name=C17")

}


namespace servers {
    function start() {
        jacdac.productIdentifier = 0x3cc2d4b4
        jacdac.deviceDescription = "CalliServ 2 servo driver board"
        jacdac.startSelfServers(() => [
            new jacdac.ServoServer(AnalogPin.C16, { instanceName: "C16" }),
            new jacdac.ServoServer(AnalogPin.C17, { instanceName: "C17" }),
        ])
    }
    start()
}
