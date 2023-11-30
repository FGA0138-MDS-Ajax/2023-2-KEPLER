import React from 'react';
import fluxogramaEner from '../styleheets/FluxogramaEner.css';

function FluxogramaEner() {
  return (
    <div>
    <>
    <div className="container" >
        {/* 1º Semestre */}
        <div className="semester-label" style={{ left: '85px', top: '18px',  }}>1º Semestre</div>
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
        <div className="course-info" style={{ left: '60px', top: '210px' }}>Algoritmos e programação<br />de computadores</div>

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
        <div className="semester-label" style={{ left: '305px', top: '13px',  }}>2º Semestre</div>
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
        <div className="course-info" style={{ left: '287px', top: '345px' }}>Física 1 experimental<br /></div>
       
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
        <div className="semester-label" style={{ left: '544px', top: '13px' }}>3º semestre</div>
        <div><div className="course-card" style={{ left: '505px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '70px' }}>cálculo 3<br /> </div></div>
        <div className="course-info" style={{ left: '519px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>
        <div><div className="course-card" style={{ left: '505px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '210px' }}>mecanica dos sólidos 1<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '345px' }}>métodos numéricos<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '480px' }}>quimica geral teorica<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '615px' }}>quimica geral experimental<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
  <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
    </div>
  </div>
</div>

        <div><div className="course-card" style={{ left: '505px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '519px', top: '750px' }}>engenharia econômica<br /></div>
        <div className="course-info" style={{ left: '519px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        

        {/* 4º Semestre */}
        <div className="semester-label" style={{ left: '785px', top: '15px' }}>4º semestre</div>
        <div><div className="course-card" style={{ left: '746px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '70px' }}>fenomenos de transporte<br /> </div></div>
        <div className="course-info" style={{ left: '760px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '210px' }}>teoria de circuitos<br />eletrônicos 1</div></div>
        <div className="course-info" style={{ left: '760px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
            </div>
           </div>
         </div>
        
        <div><div className="course-card" style={{ left: '746px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '345px' }}> prática de circuitos eletrônicos 1<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '480px' }}> teoria de materiais de construção<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#B14406', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>3 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '615px' }}>laboratório de materiais de construção<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '650px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '746px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '760px', top: '750px' }}>Química Orgânica Aplicada à Engenharia <br /></div>
        <div className="course-info" style={{ left: '760px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '746px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '885px' }}>Projeto Integrador de Engenharia 1 </div></div>
        <div className="course-info" style={{ left: '760px', top: '920px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '746px', top: '1005px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '1020px' }}>Fundamentos da Teoria Eletromagnética</div></div>
        <div className="course-info" style={{ left: '760px', top: '1055px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>

        {/* 5º Semestre */}
        <div className="semester-label" style={{ left: '1023px', top: '15px' }}>5º semestre</div>
        <div><div className="course-card" style={{ left: '984px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '994px', top: '70px' }}> teoria de eletricidade aplicada<br /> </div></div>
        <div className="course-info" style={{ left: '994px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '210px' }}>laboratório de eletricidade aplicada<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(0, 128, 0)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '345px' }}>Termodinâmica 1<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '480px' }}>sinais e sistemas para engenharia <br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '615px' }}>Engenharia de Petróleo e Gás<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '998px', top: '750px' }}>Dinâmica dos Fluidos<br /></div>
        <div className="course-info" style={{ left: '998px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '984px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '885px' }}>Humanidades e Cidadania</div></div>
        <div className="course-info" style={{ left: '998px', top: '905px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 6º Semestre */}
        <div className="semester-label" style={{ left: '1265px', top: '15px' }}>6º semestre</div>

        <div><div className="course-card" style={{ left: '1229px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '70px' }}>Teoria de Sistemas de Conversão de Energia<br /> </div></div>
        <div className="course-info" style={{ left: '1243px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '210px' }}>Combustíveis e Biocombustíveis<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '345px' }}>Sistemas de Controle<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '480px' }}>engenharia de segurança do trabalho<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'green', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '615px' }}>Transferência de Calor<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '1229px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '1243px', top: '750px' }}>Teoria de Sistemas de Conversão de Energia <br /></div>
        <div className="course-info" style={{ left: '1243px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '1229px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '885px' }}>Laboratório de Sistemas de Conversão de Energia</div></div>
        <div className="course-info" style={{ left: '1243px', top: '920px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'green', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>2 créditos</span>
              </div>
            </div>
          </div>


        {/* 7º Semestre */}
        <div className="semester-label" style={{ left: '1509px', top: '15px' }}>7º semestre</div>

        <div><div className="course-card" style={{ left: '1474px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '70px' }}>Transmissão e Distribuição de Energia Elétrica<br /> </div></div>
        <div className="course-info" style={{ left: '1488px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '210px' }}>Máquinas de Fluido<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '345px' }}>Sistemas de Energia Solar e Eólica<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '480px' }}>Economia de Energia<br /></div></div> 
        <div className="course-info" style={{ left: '1488px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
          <div><div className="course-card" style={{ left: '1474px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '615px' }}>Análise Instrumental de Combustíveis <br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '655px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '1474px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '1488px', top: '750px' }}>Biorrefinarias <br /></div>
        <div className="course-info" style={{ left: '1488px', top: '775px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 8º Semestre */}
        <div className="semester-label" style={{ left: '1749px', top: '15px' }}>8º semestre</div>

        <div><div className="course-card" style={{ left: '1714px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '70px' }}>Gestão Ambiental no Setor Energético<br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '210px' }}>Análise de Sistemas de Energia Elétrica<br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48) ', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '345px' }}>projeto integrador de engenharia 2<br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>

         <div><div className="course-card" style={{ left: '1714px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '480px' }}>Sistemas Hidroelétricos<br /></div></div> 
        <div className="course-info" style={{ left: '1728px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '1714px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '615px' }}>Processos Petroquímicos <br /></div></div>
        <div className="course-info" style={{ left: '1728px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

         <div><div className="course-card" style={{ left: '1714px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '1728px', top: '750px' }}>Centrais de Geração Termoelétrica<br /></div>
        <div className="course-info" style={{ left: '1728px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#998B0D', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>5 créditos</span>
              </div>
            </div>
          </div>

        {/* 9º Semestre */}
        <div className="semester-label" style={{ left: '1980px', top: '15px' }}>9º semestre</div>

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
        <div><div className="course-info" style={{ left: '1959px', top: '210px' }}>Estagio Supervisionado<br /> </div></div>
        <div className="course-info" style={{ left: '1959px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'red', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>14 créditos</span>
            </div>
           </div>
         </div>    
        
       
        {/* 10º Semestre */}
        <div className="semester-label" style={{ left: '2220px', top: '15px' }}>10º semestre</div>

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


      <div><div className="course-card" style={{ left: '2185px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '2199px', top: '210px' }}>Desenvolvimento Sustentável<br /></div></div>
        <div className="course-info" style={{ left: '2199px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48) ', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

          <div><div className="course-card" style={{ left: '2185px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '2199px', top: '345px' }}>Planejamento e Gestão de Energia<br /></div></div>
        <div className="course-info" style={{ left: '2199px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
            </div>
           </div>
         </div>
         <div><div className="course-card" style={{ left: '2185px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '2199px', top: '480px' }}>Tópicos Especiais 1 em Engenharia de Energia<br /></div></div> 
        <div className="course-info" style={{ left: '2199px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

      </>
    </div>
  );
}

export default FluxogramaEner;
