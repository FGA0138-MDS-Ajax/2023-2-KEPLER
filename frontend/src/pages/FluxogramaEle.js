import React from 'react';
import fluxogramaEle from '../styleheets/FluxogramaEle.css';


function FluxogramaEle() {
  return (
    <div>
    <>
    <div className="container" >
        {/* 1º Semestre */}
        <div className="semester-label" style={{ left: '85px', top: '13px', color: '#1976d2' }}>1º Semestre</div>
        <div className="course-card" style={{ left: '46px', top: '60px' }}></div>
        <div className="course-info" style={{ left: '60px', top: '70px' }}>Cálculo 1<br /></div>

        <div className="course-info" style={{ left: '60px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>

        <div className="course-card" style={{ left: '46px', top: '195px' }}></div>
        <div className="course-info" style={{ left: '60px', top: '210px' }}>Algoritmos e Programação<br />de Computadores</div>

        <div className="course-info" style={{ left: '60px', top: '250px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>

        <div className="course-card" style={{ left: '46px', top: '330px' }}></div>
        <div className="course-info" style={{ left: '60px', top: '345px' }}>Desenho Industrial<br />Assistido por Computador</div>

        <div className="course-info" style={{ left: '60px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>

        <div className="course-card" style={{ left: '46px', top: '465px' }}></div>
        <div className="course-info" style={{ left: '60px', top: '480px' }}>Introdução à Engenharia<br /></div>
        <div className="course-info" style={{ left: '60px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div className="course-card" style={{ left: '46px', top: '600px' }}></div>
        <div className="course-info" style={{ left: '60px', top: '615px' }}>Engenharia e Ambiente<br /></div>
        <div className="course-info" style={{ left: '60px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        
        {/* 2º Semestre */}
        <div className="semester-label" style={{ left: '305px', top: '13px', color: '1976d2' }}>2º Semestre</div>
        <div><div className="course-card" style={{ left: '273px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '287px', top: '70px' }}>Cálculo 2<br /></div></div>
        <div className="course-info" style={{ left: '287px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>
        <div><div className="course-card" style={{ left: '273px', top: '195px' }}></div></div>
        <div className="course-info" style={{ left: '287px', top: '210px' }}>Física 1<br /></div>
        <div className="course-info" style={{ left: '287px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        
        <div><div className="course-card" style={{ left: '273px', top: '330px' }}></div></div>
        <div className="course-info" style={{ left: '287px', top: '345px' }}>Física 1 Experimental<br /></div>
       
        <div className="course-info" style={{ left: '287px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
  <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
    </div>
  </div>
</div>

        <div><div className="course-card" style={{ left: '273px', top: '465px' }}></div></div>
        <div className="course-info" style={{ left: '287px', top: '480px' }}>Introdução à Álgebra Linear<br /></div>
        <div className="course-info" style={{ left: '287px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '273px', top: '600px' }}></div></div>
        <div className="course-info" style={{ left: '287px', top: '615px' }}>Probabilidade e Estatística<br />Aplicada à Engenharia</div>
        <div className="course-info" style={{ left: '287px', top: '650px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
      

        {/* 3º Semestre */}
        <div className="semester-label" style={{ left: '544px', top: '13px', color: '#1976d2'}}>3º semestre</div>
        <div><div className="course-card" style={{ left: '505px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '70px' }}>Cálculo 3<br /> </div></div>
        <div className="course-info" style={{ left: '519px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>
        <div><div className="course-card" style={{ left: '505px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '210px' }}>Mecânica dos Sólidos 1<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '345px' }}>Métodos Numéricos<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '480px' }}> Química Geral Teórica<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '615px' }}>Química Geral Experimental<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
  <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
    </div>
  </div>
</div>

        <div><div className="course-card" style={{ left: '505px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '519px', top: '750px' }}>Teoria de Eletrônica Digital 1<br /></div>
        <div className="course-info" style={{ left: '519px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '885px' }}> Prática de Eletrônica Digital 1</div></div>
        <div className="course-info" style={{ left: '519px', top: '905px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>

        {/* 4º Semestre */}
        <div className="semester-label" style={{ left: '785px', top: '13px', color: '#1976d2' }}>4º semestre</div>
        <div><div className="course-card" style={{ left: '746px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '70px' }}>Fenômenos de Transporte<br /> </div></div>
        <div className="course-info" style={{ left: '760px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '210px' }}>Teoria de Circuitos<br />Eletrônicos 1</div></div>
        <div className="course-info" style={{ left: '760px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
            </div>
           </div>
         </div>
        
        <div><div className="course-card" style={{ left: '746px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '345px' }}> Prática de Circuitos Eletrônicos 1<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '480px' }}> Teoria de Eletrônica Digital 2<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '615px' }}>Prática de Eletrônica Digital 2<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '650px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '746px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '760px', top: '750px' }}>Teoria de Eletromagnetismo<br /></div>
        <div className="course-info" style={{ left: '760px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '746px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '885px' }}> Prática de Eletromagnetismo</div></div>
        <div className="course-info" style={{ left: '760px', top: '905px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        {/* 5º Semestre */}
        <div className="semester-label" style={{ left: '1023px', top: '13px', color: '#1976d2'}}>5º semestre</div>
        <div><div className="course-card" style={{ left: '984px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '994px', top: '70px' }}> Teoria de Eletricidade Aplicada<br /> </div></div>
        <div className="course-info" style={{ left: '994px', top: '107px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '210px' }}>Laboratório de Materiais<br />de construção</div></div>
        <div className="course-info" style={{ left: '998px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '345px' }}>Teoria de Materiais de Construção<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#B14406', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>3 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '480px' }}>Eletrônica Embarcada <br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '615px' }}>Prática de Física dos Dispositivos Eletrônicos<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '650px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '998px', top: '750px' }}>  Teoria de Física dos Dispositivos Eletrônicos<br /></div>
        <div className="course-info" style={{ left: '998px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '984px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '885px' }}>  Sinais e Sistemas para Engenharia</div></div>
        <div className="course-info" style={{ left: '998px', top: '920px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>

        {/* 6º Semestre */}
        <div className="semester-label" style={{ left: '1265px', top: '13px', color: '#1976d2' }}>6º semestre</div>

        <div><div className="course-card" style={{ left: '1229px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '70px' }}>Teoria de Circuitos Eletrônicos 2<br /> </div></div>
        <div className="course-info" style={{ left: '1243px', top: '107px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '210px' }}> Prática de Circuitos Eletrônicos 2<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '345px' }}>Princípios de Comunicação para Engenharia<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '480px' }}>Princípios de Controle<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '615px' }}> Humanidades e Cidadania<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '1229px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '1243px', top: '750px' }}>  Gestão da Produção e Qualidade<br /></div>
        <div className="course-info" style={{ left: '1243px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 7º Semestre */}
        <div className="semester-label" style={{ left: '1509px', top: '13px' }}>7º semestre</div>

        <div><div className="course-card" style={{ left: '1474px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '70px' }}> Projetos de Circuitos Integrados 1<br /> </div></div>
        <div className="course-info" style={{ left: '1488px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '210px' }}>Sistemas Operacionais Embarcados<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '345px' }}>Instrumentação Eletrônica<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '480px' }}>Engenharia de Segurança do Trabalho <br /></div></div> 
        <div className="course-info" style={{ left: '1488px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '1474px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '615px' }}> Processamento de Sinais<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        {/* 8º Semestre */}
        <div className="semester-label" style={{ left: '1749px', top: '13px', color: '#1976d2' }}>8º semestre</div>

        <div><div className="course-card" style={{ left: '1714px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '70px' }}>Teoria de Circuitos Eletrônicos 3<br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '107px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '210px' }}>Prática de Circuitos Eletrônicos 3 <br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '345px' }}>Projeto Integrador de Engenharia 2<br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>

        {/* 9º Semestre */}
        <div className="semester-label" style={{ left: '1980px', top: '13px', color: '#1976d2' }}>9º semestre</div>

        <div><div className="course-card" style={{ left: '1945px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1959px', top: '70px' }}>Trabalho de Conclusão <br />de Curso 1 </div></div>
        <div className="course-info" style={{ left: '1959px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1945px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1959px', top: '210px' }}>Estágio Supervisionado<br /> </div></div>
        <div className="course-info" style={{ left: '1959px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'red', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>14 créditos</span>
            </div>
           </div>
         </div>    
        
       
        {/* 10º Semestre */}
        <div className="semester-label" style={{ left: '2220px', top: '13px', color: '#1976d2'}}>10º semestre</div>

        <div><div className="course-card" style={{ left: '2185px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '2199px', top: '70px' }}>Trabalho de Conclusão <br />de Curso 2 </div></div>
        <div className="course-info" style={{ left: '2199px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>
      </div>
      </>
    </div>
  );
}

export default FluxogramaEle;
