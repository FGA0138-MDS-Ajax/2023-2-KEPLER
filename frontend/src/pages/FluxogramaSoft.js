import React from "react";
import Fluxograma from '../styleheets/FluxogramaSoft.css';


function FluxogramaSoft() {
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
        <div className="semester-label" style={{ left: '305px', top: '13px', color: '#1976d2' }}>2º Semestre</div>
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
        <div><div className="course-card" style={{ left: '273px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '287px', top: '750px' }}>Desenvolvimento de Software<br /></div>
        <div className="course-info" style={{ left: '287px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        

        {/* 3º Semestre */}
        <div className="semester-label" style={{ left: '544px', top: '13px', color: '#1976d2' }}>3º semestre</div>
        <div><div className="course-card" style={{ left: '505px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '70px' }}>Métodos Numéricos<br />para Engenharias </div></div>
        <div className="course-info" style={{ left: '519px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '16px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '210px' }}>Engenharia Econômica<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '345px' }}>Humanidade e Cidadania<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '480px' }}>Teoria de Eletrônica digital 1<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '500px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '615px' }}>Pratica de Eletrônica Digital 1<br /></div></div>
        <div className="course-info" style={{ left: '519px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '519px', top: '750px' }}>Orientação a Objetos<br /></div>
        <div className="course-info" style={{ left: '519px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '505px', top: '870px' }}></div></div>
        <div><div className="course-info" style={{ left: '519px', top: '885px' }}>Matemática Discreta 1</div></div>
        <div className="course-info" style={{ left: '519px', top: '905px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 4º Semestre */}
        <div className="semester-label" style={{ left: '785px', top: '15px', color: '#1976d2' }}>4º semestre</div>
        <div><div className="course-card" style={{ left: '746px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '70px' }}>Gestão de Produção e Qualidade<br /> </div></div>
        <div className="course-info" style={{ left: '760px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '210px' }}>Métodos de Desenvolvimento de Software</div></div>
        <div className="course-info" style={{ left: '745px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        
        <div><div className="course-card" style={{ left: '746px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '345px' }}>Estruturas de Dados 1<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '365px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '480px' }}>Fundamentos da Arquitetura<br />de Computadores</div></div>
        <div className="course-info" style={{ left: '760px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '615px' }}>Matemática Discreta 2<br /></div></div>
        <div className="course-info" style={{ left: '760px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '746px', top: '735px' }}></div></div>
        <div><div className="course-info" style={{ left: '760px', top: '750px' }}>Projeto Integrador<br />de Engenharia 1 </div></div>
        <div className="course-info" style={{ left: '760px', top: '785px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        {/* 5º Semestre */}
        <div className="semester-label" style={{ left: '1023px', top: '15px', color: '#1976d2'}}>5º semestre</div>
        <div><div className="course-card" style={{ left: '984px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '994px', top: '70px' }}>Interação Humano Computador<br /> </div></div>
        <div className="course-info" style={{ left: '994px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '210px' }}>Requisitos de Software<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '345px' }}>Sistemas de Banco de Dados 1<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '480px' }}>Fundamentos de Sistemas <br />Operacionais</div></div>
        <div className="course-info" style={{ left: '998px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '998px', top: '615px' }}>Compiladores 1<br /></div></div>
        <div className="course-info" style={{ left: '998px', top: '635px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '984px', top: '735px' }}></div></div>
        <div className="course-info" style={{ left: '998px', top: '750px' }}>Estrutura de Dados 2<br /></div>
        <div className="course-info" style={{ left: '998px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 6º Semestre */}
        <div className="semester-label" style={{ left: '1265px', top: '15px', color: '#1976d2' }}>6º semestre</div>

        <div><div className="course-card" style={{ left: '1229px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '70px' }}>Qualidade de Software 1<br /> </div></div>
        <div className="course-info" style={{ left: '1243px', top: '90px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '210px' }}>Testes de Software<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '345px' }}>Arquitetura e Desenho de Software<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '480px' }}>Fundamentos de Redes de Computadores<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '600px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '615px' }}>Sistemas de Banco de Dados 2<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '650px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1229px', top: '735px' }}></div></div>
        <div><div className="course-info" style={{ left: '1243px', top: '750px' }}>Projeto e Análise de Algoritmos<br /></div></div>
        <div className="course-info" style={{ left: '1243px', top: '770px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>

        {/* 7º Semestre */}
        <div className="semester-label" style={{ left: '1509px', top: '15px', color: '#1976d2' }}>7º semestre</div>

        <div><div className="course-card" style={{ left: '1474px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '70px' }}>Técnicas de Programação em Plataformas Emergentes<br /> </div></div>
        <div className="course-info" style={{ left: '1488px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '210px' }}>Paradigmas de Programação<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '230px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '345px' }}>Fundamentos de Sistemas Embarcados<br /></div></div>
        <div className="course-info" style={{ left: '1488px', top: '380px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1474px', top: '465px' }}></div></div>
        <div><div className="course-info" style={{ left: '1488px', top: '480px' }}>Programação para Sistemas <br />Paralelos e Distribuídos</div></div> 
        <div className="course-info" style={{ left: '1488px', top: '515px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        {/* 8º Semestre */}
        <div className="semester-label" style={{ left: '1749px', top: '15px', color: '#1976d2' }}>8º semestre</div>

        <div><div className="course-card" style={{ left: '1714px', top: '60px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '70px' }}>Engenharia de Produto<br />de Software </div></div>
        <div className="course-info" style={{ left: '1728px', top: '105px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '195px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '210px' }}>Gerencia de Configuração e<br />Evolução de Software</div></div>
        <div className="course-info" style={{ left: '1728px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: 'rgb(110, 54, 48)', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>4 créditos</span>
              </div>
            </div>
          </div>
        <div><div className="course-card" style={{ left: '1714px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1728px', top: '345px' }}>Estagio Supervisionado<br /></div></div>
        {/* 9º Semestre */}
        <div className="semester-label" style={{ left: '1980px', top: '15px', color: '#1976d2' }}>9º semestre</div>

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
        <div><div className="course-info" style={{ left: '1959px', top: '210px' }}>Gerencia de Configuração e<br /> Evolução de Software</div></div>
        <div className="course-info" style={{ left: '1959px', top: '245px', display: 'flex', flexWrap: 'wrap', gap: '4px 6px', position: 'absolute' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: '0', minWidth: '0px', maxWidth: '100%', height: '18px', borderRadius: '3px', paddingLeft: '6px', paddingRight: '6px', fontSize: '12px', lineHeight: '120%', color: 'rgb(253 253 253 / 80%)', background: '#183347', margin: '0px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-flex', alignItems: 'center', height: '18px', lineHeight: '18px' }}>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>6 créditos</span>
            </div>
           </div>
         </div>    
        <div><div className="course-card" style={{ left: '1945px', top: '330px' }}></div></div>
        <div><div className="course-info" style={{ left: '1959px', top: '345px' }}>Estagio Supervisionado<br /></div></div>
       
        {/* 10º Semestre */}
        <div className="semester-label" style={{ left: '2220px', top: '15px', color: '#1976d2' }}>10º semestre</div>

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
export default FluxogramaSoft;
