import React from 'react'
import './table.css'

const Table = () => {
    return (
        <div className='container'>
            <table>
                <tr>
                    <th>Carrocería</th>
                    <th>B</th>
                    <th>M</th>
                    <th>N/A</th>
                </tr>
                <tr>
                    <td>PARACHOQUE DELANTERO</td>
                    <td><input type="radio" id="bueno" name="estado" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>PARACHOQUE TRASERO</td>
                    <td><input type="radio" id="bueno" name="estado1" value="bueno"required /></td>
                    <td><input type="radio" id="malo" name="estado1" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado1" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>PUERTA DERECHA</td>
                    <td><input type="radio" id="bueno" name="estado2" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado2" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado2" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>PUERTA IZQUIERDA</td>
                    <td><input type="radio" id="bueno" name="estado3" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado3" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado3" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>TECHO</td>
                    <td><input type="radio" id="bueno" name="estado4" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado4" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado4" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>NEUMATICOS DELANTEROS</td>
                    <td><input type="radio" id="bueno" name="estado5" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado5" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado5" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>NEUMATICOS TRASEROS</td>
                    <td><input type="radio" id="bueno" name="estado6" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado6" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado6" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>NEUMATICOS DE REPUESTO</td>
                    <td><input type="radio" id="bueno" name="estado7" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado7" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado7" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>CUÑAS</td>
                    <td><input type="radio" id="bueno" name="estado8" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado8" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado8" value="N/A" /></td>
                </tr>
                <tr>
                    <td>PORTA CUÑAS</td>
                    <td><input type="radio" id="bueno" name="estado9" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado9" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado9" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>ESPEJOS</td>
                    <td><input type="radio" id="bueno" name="estado10" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado10" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado10" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>ESCALA TRASERA</td>
                    <td><input type="radio" id="bueno" name="estado11" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado11" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado11" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>PARABRISAS</td>
                    <td><input type="radio" id="bueno" name="estado12" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado12" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado12" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>VIDRIOS LATERALES</td>
                    <td><input type="radio" id="bueno" name="estado13" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado13" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado13" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>ALARMA DE RETROCESO</td>
                    <td><input type="radio" id="bueno" name="estado14" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado14" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado14" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>INDICADORES DE TORQUE</td>
                    <td><input type="radio" id="bueno" name="estado15" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado15" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado15" value="N/A" required /></td>
                </tr>
                <tr id="separator">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Cabina</th>
                    <th>B</th>
                    <th>M</th>
                    <th>N/A</th>
                </tr>
                <tr>
                    <td>CAMARA RETROCESO</td>
                    <td><input type="radio" id="bueno" name="estado16" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado16" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado16" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>CALEFACCIÓN</td>
                    <td><input type="radio" id="bueno" name="estado17" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado17" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado17" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>AIRE ACONDICIONADO</td>
                    <td><input type="radio" id="bueno" name="estado18" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado18" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado18" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>INTERRUPTORES MASTER</td>
                    <td><input type="radio" id="bueno" name="estado19" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado19" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado19" value="N/A" /></td>
                </tr>
                <tr>
                    <td>CORTA CORRIENTE</td>
                    <td><input type="radio" id="bueno" name="estado20" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado20" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado20" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>RADIO COMUNICACIÓN</td>
                    <td><input type="radio" id="bueno" name="estado21" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado21" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado21" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>RADIO MUSICA</td>
                    <td><input type="radio" id="bueno" name="estado22" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado22" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado22" value="N/A" /></td>
                </tr>
                <tr>
                    <td>SELECTOR DE MARCHAS </td>
                    <td><input type="radio" id="bueno" name="estado23" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado23" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado23" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>INTERRUPTOR FRENO MOTOR</td>
                    <td><input type="radio" id="bueno" name="estado24" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado24" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado24" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>PARKING</td>
                    <td><input type="radio" id="bueno" name="estado25" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado25" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado25" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>CONTROL BUSCA CAMINO</td>
                    <td><input type="radio" id="bueno" name="estado26" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado26" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado26" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>SIRENA</td>
                    <td><input type="radio" id="bueno" name="estado27" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado27" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado27" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>CLAXON</td>
                    <td><input type="radio" id="bueno" name="estado28" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado28" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado28" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>BOCINA</td>
                    <td><input type="radio" id="bueno" name="estado29" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado29" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado29" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>INDICADOR NIVEL AGUA</td>
                    <td><input type="radio" id="bueno" name="estado30" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado30" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado30" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>INDICADOR NIVEL ESPUMA</td>
                    <td><input type="radio" id="bueno" name="estado31" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado31" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado31" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>VALVULA ESTANQUE A BOMBA</td>
                    <td><input type="radio" id="bueno" name="estado32" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado32" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado32" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>JOYSTICK MONITOR FRONTAL</td>
                    <td><input type="radio" id="bueno" name="estado33" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado33" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado33" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>JOYSTICK MONITOR SUPERIOR</td>
                    <td><input type="radio" id="bueno" name="estado34" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado34" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado34" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>lINTERNA</td>
                    <td><input type="radio" id="bueno" name="estado35" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado35" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado35" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>BOTIQUIN</td>
                    <td><input type="radio" id="bueno" name="estado36" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado36" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado36" value="N/A" required /></td>
                </tr>
                <tr>
                    <td>LAMINA SEGURIDAD VIDRIOS</td>
                    <td><input type="radio" id="bueno" name="estado37" value="bueno" required /></td>
                    <td><input type="radio" id="malo" name="estado37" value="malo" required /></td>
                    <td><input type="radio" id="N/A" name="estado37" value="N/A" required /></td>
                </tr>
                <tr>
                    <th>TOTAL</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>ESTADO</th>
                    <th colspan="3"></th>
                </tr>
            </table>
        </div>
    )
}

export default Table;