import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const Sidebar = ({ activeTab, setActiveTab, user }: { activeTab: string, setActiveTab: (t: string) => void, user: any }) => (
  <aside className="hidden lg:flex flex-col py-6 border-r border-line h-screen w-[240px] fixed left-0 top-0 z-40 bg-surface">
    <div 
      className="px-6 mb-8 flex items-center gap-2 cursor-pointer group"
      onClick={() => setActiveTab('landing')}
    >
      <span className="material-symbols-outlined text-primary text-[28px] font-bold group-hover:scale-110 transition-transform">clinical_notes</span>
      <h1 className="font-display text-2xl font-extrabold text-primary tracking-tighter">AgiMed</h1>
    </div>
    
    <nav className="flex-1">
      {[
        { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
        { id: 'patients', icon: 'groups', label: 'Pacientes' },
        { id: 'triagem', icon: 'psychology', label: 'Triagem AI' },
        { id: 'metrics', icon: 'monitoring', label: 'Gestão Operacional' },
        { id: 'history', icon: 'history', label: 'Histórico Clínico' },
        { id: 'settings', icon: 'settings', label: 'Configurações' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full px-6 py-3 flex items-center gap-3 transition-all cursor-pointer border-l-4 group ${
            activeTab === item.id 
              ? 'bg-[#f0f4ff] text-primary border-primary font-bold' 
              : 'text-text-sub hover:bg-bg border-transparent font-medium'
          }`}
        >
          <span 
            className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${activeTab === item.id ? 'opacity-100' : 'opacity-60'}`}
            style={{ fontVariationSettings: `'FILL' ${activeTab === item.id ? 1 : 0}` }}
          >
            {item.icon}
          </span>
          <span className="text-[13px]">{item.label}</span>
        </button>
      ))}
    </nav>

    <div className="px-6 mt-auto pt-4 border-t border-line">
       <div className="flex items-center gap-3 mb-4">
         <img src={user.avatar} className="w-10 h-10 rounded-full object-cover border border-line" alt="User" />
         <div className="overflow-hidden">
           <p className="font-bold text-sm truncate">{user.name}</p>
           <p className="text-[10px] text-text-sub font-bold uppercase">{user.id}</p>
         </div>
       </div>
       <button onClick={() => setActiveTab('landing')} className="w-full flex items-center gap-2 text-text-sub hover:text-error transition-colors text-xs font-bold border border-line py-2 justify-center rounded-md hover:bg-red-50">
          <span className="material-symbols-outlined text-sm">logout</span>
          SAIR DO SISTEMA
       </button>
    </div>
  </aside>
);

const LandingView = ({ onSelectMode }: { onSelectMode: (mode: 'pro' | 'patient') => void }) => {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 bg-gradient-to-br from-bg to-white">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
         <span className="material-symbols-outlined text-primary text-[64px] font-bold mb-4 block">clinical_notes</span>
         <h1 className="font-display text-5xl font-black text-primary tracking-tighter mb-2">AgiMed</h1>
         <p className="text-text-sub font-bold uppercase tracking-[0.3em] text-xs opacity-60">Inteligência Clínica de Alta Performance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <motion.button 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectMode('pro')}
          className="bg-surface border border-line p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group transition-all"
        >
           <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[40px]">medical_services</span>
           </div>
           <h2 className="text-2xl font-black text-text tracking-tighter mb-4 italic">Portal Profissional</h2>
           <p className="text-text-sub text-sm font-medium leading-relaxed mb-8">Gestão de atendimentos, triagem AI e métricas para médicos e gestores clínicos.</p>
           <div className="px-8 py-3 bg-bg rounded-md text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">Entrar no Sistema</div>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectMode('patient')}
          className="bg-surface border border-line p-10 rounded-2xl shadow-xl flex flex-col items-center text-center group transition-all"
        >
           <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[40px]">patient_list</span>
           </div>
           <h2 className="text-2xl font-black text-text tracking-tighter mb-4 italic">Acesso ao Paciente</h2>
           <p className="text-text-sub text-sm font-medium leading-relaxed mb-8">Inicie sua anamnese digital com suporte de inteligência artificial generativa.</p>
           <div className="px-8 py-3 bg-bg rounded-md text-[10px] font-black uppercase tracking-widest text-tertiary border border-tertiary/20 group-hover:bg-tertiary group-hover:text-white transition-colors shadow-sm">Iniciar Atendimento</div>
        </motion.button>
      </div>

      <div className="mt-16 pt-8 border-t border-line w-full max-w-sm text-center">
         <p className="text-[10px] text-text-sub font-black uppercase tracking-widest opacity-40">Infraestrutura Clínica Digital Segura • LGPD Compliance</p>
      </div>
    </div>
  )
};

const MedicalTermView = ({ onAccept, onDecline, onBack }: { onAccept: () => void, onDecline: () => void, onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6 selection:bg-primary/20 relative">
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-50 p-3 bg-surface hover:bg-bg border border-line rounded-full shadow-md flex items-center justify-center transition-all active:scale-95 text-text-sub"
        title="Voltar"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-surface border border-line rounded-xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
      >
        <header className="px-8 py-5 border-b border-line bg-[#fafbfc] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary font-bold">gavel</span>
             <h2 className="text-sm font-black text-text uppercase tracking-widest">Termo de Responsabilidade Médica</h2>
          </div>
          <span className="text-[10px] font-black text-text-sub opacity-50 uppercase tracking-tighter">Versão 2.4.0 • 2024</span>
        </header>

        <div className="flex-1 overflow-y-auto p-8 text-text-sub space-y-6 text-xs leading-relaxed font-medium">
          <section className="space-y-3">
            <h3 className="text-text font-bold uppercase tracking-tight text-sm">1. DO SIGILO PROFISSIONAL E ÉTICA</h3>
            <p>O usuário devidamente identificado declara estar ciente de que o acesso à plataforma AgiDora envolve a manipulação de dados sensíveis de saúde de terceiros, protegidos pelo Código de Ética Médica e pela Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
            <p>Compromete-se, sob as penas da lei, a manter o mais estrito sigilo sobre todas as informações clínicas, diagnósticas e pessoais dos pacientes aqui cadastrados.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-text font-bold uppercase tracking-tight text-sm">2. DO USO DA INTELIGÊNCIA ARTIFICIAL</h3>
            <p>Os "Insights" e "Resumos de Triagem" fornecidos pelo sistema são ferramentas de apoio à decisão clínica baseadas em modelos de inteligência artificial generativa. Em nenhuma hipótese substituem o julgamento clínico souverano do profissional médico assistente.</p>
            <p>O médico declara ciência de que deve validar todas as interpretações sugeridas pela IA antes de qualquer conduta terapêutica.</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-text font-bold uppercase tracking-tight text-sm">3. DA SEGURANÇA DA CONTA</h3>
            <p>As credenciais de acesso (CRM e Senha) são de uso pessoal e intransferível. O compartilhamento de conta é terminantemente proibido e resultará na revogação imediata das licenças de uso e possível notificação aos órgãos competentes.</p>
          </section>

          <section className="space-y-3">
             <h3 className="text-text font-bold uppercase tracking-tight text-sm">4. CONFORMIDADE COM NORMAS DO CFM</h3>
             <p>Este sistema opera sob as diretrizes da Resolução CFM nº 2.314/2022, que define padrões de segurança para Prontuários Eletrônicos do Paciente (PEP) e telemedicina no Brasil.</p>
          </section>

          <div className="bg-bg p-4 rounded-lg border border-line italic opacity-80">
            "Ao clicar em 'Aceitar', declaro que li, compreendi e concordo com todos os termos acima descritos, assumindo responsabilidade civil e criminal por quaisquer mau uso das informações contidas neste portal."
          </div>
        </div>

        <footer className="px-8 py-6 border-t border-line bg-white flex gap-4 shrink-0">
          <button 
            onClick={onDecline}
            className="flex-1 border border-line text-text-sub py-4 rounded-md font-black uppercase tracking-widest text-[10px] hover:bg-red-50 hover:text-error transition-all active:scale-95"
          >
            RECUSAR E SAIR
          </button>
          <button 
            onClick={onAccept}
            className="flex-[2] bg-primary text-white py-4 rounded-md font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95"
          >
            ACEITAR E ACESSAR DASHBOARD
          </button>
        </footer>
      </motion.div>
    </div>
  );
};

const TopBar = ({ title, user, onBrandClick, onBack }: { title: string, user: any, onBrandClick?: () => void, onBack?: () => void }) => (
  <header className="w-full sticky top-0 z-30 bg-surface border-b border-line lg:pl-[240px]">
    <div className="flex items-center justify-between px-8 h-16 w-full max-w-container-max mx-auto">
      <div className="flex items-center gap-4">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-1.5 hover:bg-bg rounded-full transition-colors text-text-sub lg:hidden"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
        )}
        <div 
          className="flex items-center gap-3 lg:hidden cursor-pointer group"
          onClick={onBrandClick}
        >
          <span className="material-symbols-outlined text-primary text-2xl font-bold group-hover:scale-110 transition-transform">clinical_notes</span>
          <h1 className="font-display font-extrabold text-primary text-lg">AgiMed</h1>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-4 overflow-hidden">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-1.5 hover:bg-bg rounded-md border border-line transition-all text-text-sub flex items-center gap-2 pr-4 group"
          >
            <span className="material-symbols-outlined text-sm font-bold group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
            <span className="text-[10px] font-black uppercase tracking-widest">Painel Anterior</span>
          </button>
        )}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onBrandClick}>
          <span className="material-symbols-outlined text-primary text-xl font-bold group-hover:rotate-12 transition-transform">clinical_notes</span>
          <span className="font-display font-black text-primary text-sm tracking-tighter mr-4">AgiMed</span>
        </div>
        <div className="w-px h-4 bg-line mx-2"></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
          <span className="font-bold text-xs">Unidade Central: Operando em 84% de capacidade</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-bold text-text-sub">
           <span className="material-symbols-outlined text-sm">schedule</span>
           <span>14:32 - Quinta, 24 Out</span>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-primary-container transition-all active:scale-95 shadow-sm">
           Novo Atendimento
        </button>
      </div>
    </div>
  </header>
);

// --- Sub-Views ---

const LoginView = ({ onLogin, onBack }: { onLogin: () => void, onBack: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-bg selection:bg-primary/20 relative">
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-50 p-3 bg-surface hover:bg-bg border border-line rounded-full shadow-md flex items-center justify-center transition-all active:scale-95 text-text-sub"
        title="Voltar"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl mx-auto items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex lg:col-span-7 flex-col gap-8"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-line relative h-[600px] group">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.1]" 
              src="/unnamed.jpg"
              alt="Medical Office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-transparent to-transparent flex flex-col justify-end p-10">
              <div className="bg-surface p-6 rounded-lg max-w-md border border-line">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px] font-bold">psychology</span>
                  <span className="font-black text-tertiary text-[10px] uppercase tracking-widest leading-none">Insights Baseados em IA</span>
                </div>
                <p className="text-sm font-medium leading-relaxed italic text-text">"O sistema processou os novos prontuários e identificou padrões de triagem prioritária para o Dr. Silva."</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[440px] bg-surface p-10 rounded-xl border border-line shadow-xl">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="font-display text-4xl font-black text-primary mb-2 tracking-tighter">AgiMed</h1>
              <h2 className="text-xl font-bold text-text mb-2 uppercase tracking-tighter">Acesso Profissional</h2>
              <p className="text-text-sub text-sm font-medium leading-relaxed opacity-70">Gerencie seus atendimentos com inteligência clínica avançada.</p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div className="flex flex-col gap-1.5 focus-within:text-primary transition-colors">
                <label className="text-[11px] font-black uppercase tracking-widest text-text-sub opacity-60 ml-1" htmlFor="email">Email ou CRM</label>
                <input 
                  id="email"
                  className="h-12 px-4 rounded-md border border-line bg-bg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-bold text-sm" 
                  placeholder="dr.silva@agimed.com.br"
                />
              </div>
              <div className="flex flex-col gap-1.5 focus-within:text-primary transition-colors">
                <div className="flex justify-between items-center mb-0.5">
                  <label className="text-[11px] font-black uppercase tracking-widest text-text-sub opacity-60 ml-1" htmlFor="password">Senha</label>
                  <a className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest" href="#">Esqueci</a>
                </div>
                <div className="relative">
                  <input 
                    id="password"
                    type="password"
                    className="w-full h-12 px-4 rounded-md border border-line bg-bg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-bold text-sm" 
                    placeholder="••••••••"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-sub cursor-pointer hover:text-primary transition-colors text-sm">visibility</span>
                </div>
              </div>
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-container text-white h-14 rounded-md font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-lg hover:shadow-primary/20 mt-4"
              >
                ENTRAR NO SISTEMA
                <span className="material-symbols-outlined text-sm">login</span>
              </button>
            </form>
            <div className="mt-10 pt-6 border-t border-line text-center">
              <p className="text-[10px] text-text-sub leading-relaxed italic font-bold opacity-40 uppercase tracking-widest">
                Conformidade LGPD • Criptografia End-to-End
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const DashboardView = ({ setActiveTab, newAppointments, availableSlots, onToggleSlot, onAddSlot }: { 
  setActiveTab: (t: string) => void, 
  newAppointments?: any[],
  availableSlots: any[],
  onToggleSlot: (time: string) => void,
  onAddSlot: (time: string) => void
}) => {
  const [activeSubTab, setActiveSubTab] = useState('daily');
  const [newSlotTime, setNewSlotTime] = useState('');
  const basePatients = [
    { name: 'Ricardo Alves (45 anos)', status: 'Estável', badge: 'badge-stable', color: 'primary', wait: '45 min', room: 'Sala 02', entry: '13:50', insight: 'Avaliação de exames laboratoriais. Glicemia de jejum elevada (126 mg/dL). Paciente assintomático. Foco em ajuste de metformina.' },
    { name: 'Ana Luiza Bittencourt (28 anos)', status: 'Estável', badge: 'badge-stable', color: 'primary', wait: '60 min', room: 'Recepção', entry: '13:40', insight: 'Sintomas gripais leves há 2 dias. Sem febre ou dispneia. Histórico de asma leve. Possível quadro viral.' },
  ];

  const patients = [...(newAppointments || []), ...basePatients];

  return (
    <div className="flex-1 overflow-hidden lg:pl-[240px] bg-bg h-[calc(100vh-64px)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 h-full">
        {/* Main Panel: Queue */}
        <div className="lg:col-span-2 bg-surface border border-line rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="px-2 py-1 border-b border-line flex bg-[#fafbfc]">
             {[
               { id: 'daily', label: 'Fila Diária' },
               { id: 'registration', label: 'Novo Cadastro' },
               { id: 'priority', label: 'Prioritários' },
               { id: 'agenda', label: 'Gestão de Agenda' }
             ].map(t => (
               <button 
                key={t.id}
                onClick={() => setActiveSubTab(t.id)}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeSubTab === t.id ? 'text-primary border-b-2 border-primary bg-white' : 'text-text-sub opacity-50 hover:bg-bg'
                }`}
               >
                 {t.label}
               </button>
             ))}
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {activeSubTab === 'daily' && (
               <>
                  <div className="px-5 py-3 border-b border-line bg-bg/50 flex flex-wrap gap-4 items-center">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-text-sub opacity-60">Status</label>
                      <select className="bg-white border border-line rounded px-2 py-1 text-[11px] font-bold outline-none focus:ring-1 focus:ring-primary">
                        <option>Todos os Status</option>
                        <option>Urgente</option>
                        <option>Estável</option>
                        <option>Em Triagem</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-text-sub opacity-60">Prioridade</label>
                      <select className="bg-white border border-line rounded px-2 py-1 text-[11px] font-bold outline-none focus:ring-1 focus:ring-primary">
                        <option>Todas</option>
                        <option>Alta (Vermelho/Laranja)</option>
                        <option>Média (Amarelo)</option>
                        <option>Baixa (Verde)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-text-sub opacity-60">Sala / Área</label>
                      <select className="bg-white border border-line rounded px-2 py-1 text-[11px] font-bold outline-none focus:ring-1 focus:ring-primary">
                        <option>Todas as Salas</option>
                        <option>Sala 01</option>
                        <option>Sala 02</option>
                        <option>Sala 04</option>
                        <option>Recepção</option>
                      </select>
                    </div>
                    <button className="mt-auto px-3 py-1.5 text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary/5 rounded transition-colors self-end mb-0.5">Limpar</button>
                  </div>

                  <div className="divide-y divide-line">
                    {patients.map((p, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-5 transition-colors group cursor-pointer ${p.isNew ? 'bg-primary/5 border-l-4 border-primary' : 'hover:bg-[#fcfdfe]'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="font-bold text-sm text-text">{p.name}</div>
                            {p.isNew && <span className="bg-primary text-white text-[8px] px-1 rounded animate-pulse">NOVO AGENDAMENTO</span>}
                            {p.checkInCode && (
                              <div className="bg-bg border border-line px-2 py-0.5 rounded text-[9px] font-black text-text-sub">
                                <span className="opacity-50 mr-1">CODE:</span> {p.checkInCode}
                              </div>
                            )}
                          </div>
                          <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                            p.badge === 'badge-urgent' ? 'bg-error-container text-error' : 'bg-secondary-container text-primary'
                          }`}>
                            {p.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-text-sub font-bold opacity-70 mb-3 flex items-center gap-3">
                          <span>{p.isNew ? 'Hora Marcada' : 'Entrada'}: {p.entry}</span>
                          <span className="w-1 h-1 rounded-full bg-line"></span>
                          <span>{p.room}</span>
                          <span className="w-1 h-1 rounded-full bg-line"></span>
                          <span className="text-primary">{p.wait}</span>
                        </div>
                        
                        <div className="bg-[#fff5fa] border border-[#ffe9ef] rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="material-symbols-outlined text-tertiary text-xs font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                            <span className="text-tertiary text-[10px] font-black uppercase tracking-widest leading-none">Resumo IA • Triagem Digital</span>
                          </div>
                          <p className="text-[12px] text-text-sub italic leading-relaxed">"{p.insight}"</p>
                        </div>

                        <div className="flex justify-end gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="px-3 py-1.5 border border-line rounded font-bold text-[11px] hover:bg-bg transition-colors">Ver Exames</button>
                           <button className="px-3 py-1.5 bg-primary text-white rounded font-bold text-[11px] hover:bg-primary-container transition-colors">Iniciar Consulta</button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
               </>
            )}

            {activeSubTab === 'registration' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 max-w-2xl"
              >
                <div className="mb-8">
                   <h3 className="text-lg font-black text-text tracking-tighter mb-1">Cadastrar Novo Paciente</h3>
                   <p className="text-xs font-medium text-text-sub opacity-60 uppercase tracking-widest">Entrada Rápida de Atendimento</p>
                </div>
                <form className="grid grid-cols-2 gap-6">
                   <div className="flex flex-col gap-1.5 col-span-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-70">Nome Completo</label>
                     <input className="bg-bg border border-line rounded-lg h-12 px-4 text-xs font-bold focus:ring-2 focus:ring-primary outline-none" placeholder="Ex: Maria José de Oliveira" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-70">CPF</label>
                     <input className="bg-bg border border-line rounded-lg h-12 px-4 text-xs font-bold focus:ring-2 focus:ring-primary outline-none" placeholder="000.000.000-00" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-70">Data de Nascimento</label>
                     <input type="date" className="bg-bg border border-line rounded-lg h-12 px-4 text-xs font-bold focus:ring-2 focus:ring-primary outline-none" />
                   </div>
                   <div className="flex flex-col gap-1.5 col-span-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-70">Tipo de Atendimento</label>
                     <select className="bg-bg border border-line rounded-lg h-12 px-4 text-xs font-bold focus:ring-2 focus:ring-primary outline-none appearance-none">
                        <option>Consulta de Rotina</option>
                        <option>Urgência / Emergência</option>
                        <option>Retorno</option>
                        <option>Exame Laboratorial</option>
                     </select>
                   </div>
                   <button className="col-span-2 mt-4 bg-primary text-white h-14 rounded-lg font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                     Confirmar Cadastro e Iniciar Triagem
                   </button>
                </form>
              </motion.div>
            )}

            {activeSubTab === 'agenda' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 max-w-3xl">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-lg font-black text-text tracking-tighter mb-1 uppercase">Controle de Horários</h3>
                    <p className="text-xs font-medium text-text-sub opacity-60 uppercase tracking-widest leading-relaxed">Disponibilize ou bloqueie horários para triagem digital.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-bg p-2 rounded-lg border border-line">
                    <input 
                      type="time" 
                      value={newSlotTime}
                      onChange={(e) => setNewSlotTime(e.target.value)}
                      className="bg-white border border-line rounded px-3 py-2 text-xs font-bold outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button 
                      onClick={() => {
                        if (newSlotTime) {
                          onAddSlot(newSlotTime);
                          setNewSlotTime('');
                        }
                      }}
                      className="bg-primary text-white p-2 rounded hover:bg-primary-container transition-all active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableSlots.map((slot) => (
                    <div 
                      key={slot.time}
                      className={`p-4 border rounded-xl flex items-center justify-between transition-all ${
                        slot.active 
                          ? 'bg-white border-line' 
                          : 'bg-bg border-dashed border-line opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${slot.active ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <div>
                          <p className="font-black text-sm text-text tracking-tight">{slot.time}</p>
                          <p className="text-[10px] font-bold text-text-sub uppercase opacity-60">
                            {slot.bookedBy ? `Reservado por ${slot.bookedBy}` : (slot.active ? 'Livre para triagem' : 'Horário Bloqueado')}
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => onToggleSlot(slot.time)}
                        className={`px-3 py-1.5 rounded text-[9px] font-black uppercase tracking-widest transition-all ${
                          slot.active 
                            ? 'bg-red-50 text-error border border-error/20 hover:bg-error hover:text-white' 
                            : 'bg-green-50 text-green-600 border border-green-600/20 hover:bg-green-600 hover:text-white'
                        }`}
                      >
                        {slot.active ? 'Bloquear' : 'Disponibilizar'}
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20 flex items-start gap-4">
                   <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                   <div className="space-y-1">
                      <p className="text-xs font-black text-primary uppercase tracking-widest">Sincronização em Tempo Real</p>
                      <p className="text-xs text-text-sub font-medium leading-relaxed italic">Alterações feitas aqui refletem instantaneamente no portal do paciente e no link enviado via WhatsApp.</p>
                   </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Sidebar Panels */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-1">
          {/* Metrics Panel */}
          <div className="bg-surface border border-line rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-line bg-[#fafbfc]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-text-sub">Métricas Operacionais</span>
            </div>
            <div className="p-5 border-b border-line">
              <p className="text-[11px] font-bold text-text-sub mb-1 uppercase tracking-tighter opacity-70">Tempo Médio de Espera</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold text-text tracking-tighter">18m</span>
                <span className="text-xs font-black text-green-600 mb-1">↓ 12% vs ontem</span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[11px] font-bold text-text-sub mb-1 uppercase tracking-tighter opacity-70">Conversão WhatsApp (Anamnese)</p>
              <div className="text-3xl font-extrabold text-text tracking-tighter">68%</div>
              <div className="mt-3 h-1.5 w-full bg-bg rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>
          </div>

          {/* AI Insight Highlight */}
          <div className="bg-tertiary rounded-xl text-white shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <span className="material-symbols-outlined text-[80px]">psychology</span>
             </div>
             <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Insight Operacional IA</span>
                </div>
                <p className="text-xs font-medium leading-relaxed mb-6">
                  Detectamos um pico crítico de triagem na <span className="font-black underline decoration-white/30 underline-offset-4">Ala Norte</span> entre 11h-12h. Recomendamos remanejamento imediato de equipe.
                </p>
                <button className="w-full bg-white text-tertiary font-black py-3 rounded-md text-[11px] uppercase tracking-widest active:scale-95 transition-all shadow-xl">
                  Executar Remanejamento
                </button>
             </div>
          </div>

          {/* Efficiency Panel */}
          <div className="bg-surface border border-line rounded-xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-line bg-[#fafbfc]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-text-sub">Eficiência Médica</span>
            </div>
            <div className="p-5 flex flex-col gap-5">
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text-sub">Tempo em Tela Salvo</span>
                  <span className="text-sm font-black text-primary">3.2h / dia</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text-sub">Satisfação (NPS)</span>
                  <span className="text-sm font-black text-primary">88 (Exce.)</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text-sub">Capacidade Produtiva</span>
                  <span className="text-sm font-black text-primary">High (+12%)</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricsView = () => {
  return (
    <div className="flex-1 overflow-y-auto lg:pl-[240px] bg-bg min-h-screen">
       <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6">
        <section>
          <h2 className="text-2xl font-extrabold text-text tracking-tighter">Gestão Operacional</h2>
          <p className="text-xs font-bold text-text-sub opacity-70 uppercase tracking-widest mt-1">Inteligência Estratégica e Eficiência de Fluxo</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-surface border border-line p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-sub">Lotação Atual</span>
              <span className="material-symbols-outlined text-primary text-lg">groups</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-text tracking-tighter">84%</span>
            </div>
            <div className="mt-4 w-full bg-bg h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[84%] rounded-full"></div>
            </div>
            <p className="mt-4 text-green-600 font-bold text-[10px] flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              +5% PERÍODO ANTERIOR
            </p>
          </div>

          <div className="bg-surface border border-line p-5 rounded-xl shadow-sm md:col-span-2">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-text-sub">Tempo Médio de Espera</span>
                <h3 className="text-3xl font-extrabold tracking-tighter mt-1">18 min</h3>
              </div>
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
            </div>
            <div className="h-20 flex items-end gap-1.5 px-1 mt-2">
              {[40, 60, 35, 55, 85, 95, 75, 50, 65, 45].map((h, i) => (
                <div 
                  key={i}
                  className={`flex-1 rounded-t-sm transition-colors ${h > 80 ? 'bg-primary' : 'bg-[#c9d3fd]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-text-sub opacity-50">
              <span>08:00</span>
              <span>12:00</span>
              <span className="text-primary opacity-100 font-black">Pico (13:00)</span>
              <span>18:00</span>
            </div>
          </div>

          <div className="bg-surface border border-line p-5 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-sub">Anamneses via WA</span>
              <span className="material-symbols-outlined text-green-600 text-lg">chat</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-text tracking-tighter">68%</span>
            </div>
            <div className="mt-4 p-2 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-700 font-bold text-[10px] text-center">IA REDUZ ESPERA EM 42%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-tertiary rounded-xl p-8 text-white relative overflow-hidden shadow-lg border-none">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <span className="material-symbols-outlined text-[100px]">psychology</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-sm font-bold">bolt</span>
              <span className="font-black text-[10px] uppercase tracking-[0.2em]">IA Action Recommendation</span>
            </div>
            <p className="font-bold text-lg leading-tight mb-8">
              Pico crítico detectado na Ala Norte. Remaneje 1 triador para o Acolhimento 02 imediantamente.
            </p>
            <button className="w-full bg-white text-tertiary font-black py-4 rounded-lg text-xs uppercase tracking-widest active:scale-95 transition-all shadow-xl">
              Executar Remanejamento
            </button>
          </div>

          <div className="lg:col-span-2 bg-surface border border-line rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="px-6 py-4 border-b border-line flex justify-between items-center bg-[#fafbfc]">
              <h3 className="text-xs font-black uppercase tracking-widest text-text-sub">Atendimentos Ativos</h3>
              <button className="text-primary font-bold text-[10px] uppercase border border-primary px-3 py-1.5 rounded-md hover:bg-primary/5 transition-colors">Monitor Fullscreen</button>
            </div>
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f0f4ff]/50 text-text-sub font-black text-[10px] uppercase tracking-[0.15em] border-b border-line">
                    <th className="px-6 py-3">Paciente</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Espera</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { name: 'Maria Almeida', status: 'Em Triagem', location: 'Ala Norte', wait: '05 min' },
                    { name: 'Ricardo Soares', status: 'Aguardando', location: 'Recepção', wait: '22 min' },
                    { name: 'Carla Pereira', status: 'Em Triagem', location: 'Ala Sul', wait: '12 min' },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfdfe] transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-sm text-text">{item.name}</div>
                        <div className="text-[10px] text-text-sub font-bold opacity-60 uppercase">{item.location}</div>
                      </td>
                      <td className="px-6 py-4">
                         <span className="text-[10px] font-black uppercase bg-[#f0f4ff] text-primary px-2 py-0.5 rounded border border-primary/20">{item.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-bold text-sm text-text">{item.wait}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PatientView = ({ onBack, onComplete, availableSlotsPerDoctor, doctors }: { 
  onBack: () => void, 
  onComplete: (app: any) => void, 
  availableSlotsPerDoctor: Record<string, any[]>,
  doctors: any[]
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: 'Mariana Souza de Oliveira',
    patientCPF: '***.***.123-88',
    location: 'Peito',
    intensity: 5,
    duration: '2-4 horas',
    description: '',
    doctorId: '',
    time: ''
  });

  const [recommendedDoctorId, setRecommendedDoctorId] = useState<string>('');
  const [checkInCode, setCheckInCode] = useState('');

  // Recommendation logic
  useEffect(() => {
    if (step === 3) {
      const desc = formData.description.toLowerCase();
      const loc = formData.location.toLowerCase();
      
      const keywordMap: Record<string, string[]> = {
        'Cardiologia': ['peito', 'coracao', 'coração', 'palpitação', 'palpitacao', 'falta de ar', 'arritmia', 'sopro', 'pressão alta', 'pressao alta', 'desmaio', 'sincope', 'síncope', 'infarto', 'taquicardia', 'bradicardia', 'hipertensao', 'hipertensão', 'coronaria', 'cardiaco'],
        'Neurologia': ['cabeça', 'cabeca', 'tontura', 'formigamento', 'convulsao', 'convulsão', 'tremor', 'derrame', 'avc', 'enxaqueca', 'paralisia', 'memória', 'memoria', 'esquecimento', 'nervos', 'cerebro', 'cérebro', 'cefaleia', 'epilepsia', 'parkinson', 'alzheimer', 'cognição', 'neuralgia'],
        'Gastroenterologia': ['azia', 'abdômen', 'abdomen', 'refluxo', 'diarreia', 'vômito', 'vomito', 'enjoo', 'estômago', 'estomago', 'intestino', 'gastrite', 'úlcera', 'ulcera', 'queimação', 'queimacao', 'barriga', 'fígado', 'figado', 'vesícula', 'vesicula', 'prisao de ventre', 'constipação', 'gastrico', 'gástrico', 'estofado', 'flatulência'],
        'Ortopedia': ['articulação', 'articulacao', 'coluna', 'joelho', 'osso', 'fratura', 'entorse', 'luxação', 'luxacao', 'punho', 'ombro', 'tornozelo', 'quadril', 'músculo', 'musculo', 'tendão', 'tendao', 'fisioterapia', 'trauma', 'bursite', 'tendinite', 'quebrei', 'torci', 'lesão', 'lesao', 'reumatismo', 'postura'],
        'Dermatologia': ['pele', 'cabelo', 'unha', 'mancha', 'micoze', 'verruga', 'acne', 'espinha', 'coceira', 'dermatite', 'eczema', 'psoríase', 'psoriase', 'pinta', 'sarda', 'melasma', 'urticaria', 'urticária', 'queda de cabelo', 'alopecia', 'alopécia', 'queimadura', 'alergia na pele'],
        'Psiquiatria': ['ansiedade', 'depressão', 'depressao', 'humor', 'sono', 'insônia', 'insonia', 'pânico', 'panico', 'medo', 'surto', 'comportamento', 'transtorno', 'bipolar', 'esquizofrenia', 'mente', 'psicologico', 'psicológico', 'estresse', 'burnout', 'deficit de atencao', 'tdah', 'delirio', 'alucinação'],
        'Ginecologia': ['feminina', 'papanicolau', 'vagina', 'útero', 'utero', 'corrimento', 'menstruação', 'menstruacao', 'mama', 'seio', 'ovário', 'ovario', 'contraceptivo', 'hpv', 'gravidez', 'gestante', 'parto', 'menopausa', 'gineco', 'cólicas', 'colica', 'infecção vaginal'],
        'Urologia': ['urinar', 'rim', 'próstata', 'prostata', 'pênis', 'penis', 'bexiga', 'sangue na urina', 'ereção', 'erecao', 'disfunção', 'disfuncao', 'calculo', 'cálculo', 'pedra no rim', 'urina', 'urologo', 'testiculo', 'testículo', 'ejaculação precoce'],
        'Otorrinolaringologia': ['ouvido', 'nariz', 'garganta', 'rinite', 'sinusite', 'rouquidão', 'rouquidao', 'labirintite', 'zumbido', 'audição', 'audicao', 'amígdala', 'amigdala', 'otite', 'faringite', 'laringite', 'congestionado', 'surdez', 'ronco', 'apneia'],
        'Endocrinologia': ['diabetes', 'tireoide', 'peso', 'obesidade', 'hormônio', 'hormonio', 'crescimento', 'colesterol', 'triglicérides', 'triglicerides', 'metabolismo', 'insulina', 'glandula', 'glândula', 'andropausa', 'hipoglicemia'],
        'Pediatria': ['criança', 'crianca', 'adolescente', 'bebê', 'bebe', 'recém-nascido', 'recem-nascido', 'vacina', 'escola', 'infantil', 'puericultura', 'nascimento', 'creche'],
        'Oftalmologia': ['vista', 'visão', 'visao', 'embaçada', 'embacada', 'olho', 'conjuntivite', 'óculos', 'oculos', 'grau', 'miopia', 'astigmatismo', 'retina', 'catarata', 'glaucoma', 'iris', 'pupila', 'colirio', 'colírio', 'olho seco']
      };

      let detectedSpecialty = '';
      
      // Look for the specialty with the most keyword hits
      let maxHits = 0;
      for (const [specialty, keywords] of Object.entries(keywordMap)) {
        const hits = keywords.filter(kw => desc.includes(kw) || loc.includes(kw)).length;
        if (hits > maxHits) {
          maxHits = hits;
          detectedSpecialty = specialty;
        }
      }

      const recommended = doctors.find(d => d.specialty === detectedSpecialty);
      if (recommended) {
        setRecommendedDoctorId(recommended.id);
        if (!formData.doctorId) {
          setFormData(prev => ({ ...prev, doctorId: recommended.id }));
        }
      } else if (!formData.doctorId) {
        setFormData(prev => ({ ...prev, doctorId: doctors[0]?.id || '' }));
      }
    }
  }, [step, formData.description, formData.location, doctors]);

  const selectedDoctor = doctors.find(d => d.id === formData.doctorId);
  const availableSlots = availableSlotsPerDoctor[formData.doctorId] || [];
  
  const handleFinalSubmit = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCheckInCode(code);
    
    onComplete({
      name: formData.patientName,
      doctorName: selectedDoctor?.name || 'Dr. Silva',
      specialty: selectedDoctor?.specialty || 'Cardiologia',
      status: 'Agendado',
      badge: 'badge-stable',
      color: 'primary',
      wait: 'Confirmado',
      room: 'Aguardando',
      entry: formData.time,
      insight: `Paciente relata desconforto na região: ${formData.location}. Intensidade ${formData.intensity}/10. Duração: ${formData.duration}. Obs: ${formData.description || 'Nenhuma observação adicional.'}`,
      isNew: true,
      doctorId: formData.doctorId,
      checkInCode: code
    });
    setStep(5);
  };

  return (
    <div className="bg-bg min-h-screen pb-24 font-sans">
      <header className="w-full sticky top-0 z-50 bg-white border-b border-line">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-bg rounded-full transition-colors text-text-sub">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={onBack}
            >
              <span className="material-symbols-outlined text-primary text-2xl font-bold group-hover:scale-110 transition-transform">clinical_notes</span>
              <h1 className="font-display font-black text-primary text-lg tracking-tighter">AgiMed</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black text-text-sub uppercase tracking-widest hidden sm:block">Paciente Conectado</span>
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" className="w-8 h-8 rounded-full border border-line" alt="Pacient" />
          </div>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-6 pt-10 flex flex-col gap-10">
        <nav className="flex items-center justify-between px-4 mb-6 relative">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-line -z-10 mx-10"></div>
          <div className={`absolute top-4 left-0 h-0.5 bg-primary -z-10 mx-10 transition-all duration-500 ${
            step === 1 ? 'w-[0%]' : 
            step === 2 ? 'w-[25%]' : 
            step === 3 ? 'w-[50%]' : 
            step === 4 ? 'w-[75%]' : 
            'w-[100%]'
          }`}></div>
          
          {[
            { n: 1, l: 'ID' },
            { n: 2, l: 'Sintomas' },
            { n: 3, l: 'Doutor' },
            { n: 4, l: 'Horário' },
            { n: 5, l: 'Fim' }
          ].map((s) => (
            <button 
              key={s.n} 
              onClick={() => step < 5 && setStep(s.n)}
              className={`flex flex-col items-center gap-2 transition-all hover:scale-110 active:scale-95 ${step < s.n ? 'opacity-40 hover:opacity-100' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm transition-all duration-300 ${step >= s.n ? 'bg-primary text-white scale-110' : 'bg-surface text-text border border-line'}`}>
                {s.n}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${step >= s.n ? 'text-primary' : 'text-text-sub'}`}>{s.l}</span>
            </button>
          ))}
        </nav>


        {step === 2 && (
          <section className="flex flex-col gap-8">
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-black text-text uppercase tracking-tighter">Anamnese Digital</h2>
              <p className="text-xs text-text-sub font-medium opacity-70">Descreva seus sintomas detalhadamente.</p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-line rounded-xl p-6 shadow-sm flex flex-col gap-8"
            >
              {/* Region Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-60 ml-1">Região de Desconforto</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: 'psychiatry', label: 'Cabeça' },
                    { icon: 'cardiology', label: 'Peito' },
                    { icon: 'gastroenterology', label: 'Abdômen' },
                    { icon: 'more_horiz', label: 'Outros' },
                  ].map((btn, i) => (
                    <button 
                      key={i}
                      onClick={() => setFormData({...formData, location: btn.label})}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all active:scale-95 border ${
                        formData.location === btn.label 
                          ? 'border-primary bg-primary/5 text-primary shadow-sm font-bold' 
                          : 'border-line hover:border-primary/50 text-text font-medium'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{btn.icon}</span>
                      <span className="text-[10px] uppercase tracking-widest">{btn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity Scale */}
              <div className="space-y-4">
                 <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-60">Intensidade da Dor</label>
                    <span className="text-sm font-black text-primary">{formData.intensity}/10</span>
                 </div>
                 <input 
                  type="range" min="1" max="10" 
                  value={formData.intensity}
                  onChange={(e) => setFormData({...formData, intensity: parseInt(e.target.value)})}
                  className="w-full h-2 bg-bg rounded-lg appearance-none cursor-pointer accent-primary border border-line" 
                 />
                 <div className="flex justify-between text-[8px] font-black opacity-30 uppercase tracking-widest">
                    <span>Leve</span>
                    <span>Moderada</span>
                    <span>Intensa</span>
                 </div>
              </div>

              {/* Duration */}
              <div className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-60 ml-1">Duração dos Sintomas</label>
                 <div className="flex flex-wrap gap-2">
                    {['< 1 hora', '2-4 horas', '1 dia', 'Mais de 2 dias'].map(d => (
                      <button 
                        key={d}
                        onClick={() => setFormData({...formData, duration: d})}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold border transition-all ${
                          formData.duration === d ? 'bg-primary text-white border-primary' : 'bg-bg text-text-sub border-line'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-sub opacity-60 ml-1" htmlFor="desc">Observações Adicionais</label>
                <textarea 
                  id="desc"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-bg border border-line rounded-lg p-4 min-h-[80px] focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow font-bold text-xs"
                  placeholder="Ex: Tive febre ontem à noite..."
                />
              </div>
            </motion.div>

            <div className="flex gap-4">
               <button onClick={() => setStep(1)} className="flex-1 bg-surface border border-line text-text py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 active:scale-95 transition-all">
                  Voltar
               </button>
               <button onClick={() => setStep(3)} className="flex-[2] bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all group">
                PRÓXIMO PASSO
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-black text-text uppercase tracking-tighter">Ideal para Seus Sintomas</h2>
              <p className="text-xs text-text-sub font-medium opacity-70">A AgiDora recomenda o especialista mais adequado.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto px-1 pb-4 scroll-smooth">
              {doctors.map(doctor => (
                <button 
                  key={doctor.id}
                  onClick={() => setFormData({...formData, doctorId: doctor.id})}
                  className={`p-4 rounded-xl border flex items-center gap-4 transition-all active:scale-[0.98] relative ${
                    formData.doctorId === doctor.id 
                      ? 'bg-primary/5 border-primary shadow-md' 
                      : 'bg-surface border-line hover:border-primary/50'
                  } ${recommendedDoctorId === doctor.id ? 'ring-2 ring-tertiary/20' : ''}`}
                >
                  {recommendedDoctorId === doctor.id && (
                    <div className="absolute -top-2 left-6 bg-tertiary text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg z-10">
                      <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                      RECOMENDADO
                    </div>
                  )}
                  <img src={doctor.avatar} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" alt={doctor.name} />
                  <div className="text-left flex-1">
                    <p className="font-black text-text uppercase tracking-tight">{doctor.name}</p>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{doctor.specialty}</p>
                    <p className="text-[10px] text-text-sub font-medium mt-1 opacity-60">Agenda disponível hoje</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.doctorId === doctor.id ? 'border-primary bg-primary text-white' : 'border-line'}`}>
                    {formData.doctorId === doctor.id && <span className="material-symbols-outlined text-xs font-black">check</span>}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
               <button onClick={() => setStep(2)} className="flex-1 bg-surface border border-line text-text py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 active:scale-95 transition-all">
                  Voltar
               </button>
               <button onClick={() => setStep(4)} className="flex-[2] bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all group">
                CONTINUAR
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </motion.section>
        )}

        {step === 4 && (
          <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
            <div className="space-y-1 text-center">
              <h2 className="text-xl font-black text-text uppercase tracking-tighter">Escolha o Horário</h2>
              <p className="text-xs text-text-sub font-medium opacity-70">Agenda disponível para {selectedDoctor?.name}.</p>
            </div>

            <div className="bg-surface border border-line rounded-xl p-6 shadow-sm grid grid-cols-2 gap-4">
               {availableSlots.length > 0 ? (
                 availableSlots.map(slot => (
                   <button 
                    key={slot.time}
                    disabled={!slot.active}
                    onClick={() => setFormData({...formData, time: slot.time})}
                    className={`p-4 rounded-lg border font-black text-sm transition-all relative overflow-hidden ${
                      formData.time === slot.time 
                        ? 'bg-primary text-white border-primary shadow-lg scale-105' 
                        : slot.active 
                          ? 'bg-bg text-text-sub border-line opacity-60 hover:opacity-100'
                          : 'bg-bg border-line opacity-20 cursor-not-allowed grayscale'
                    }`}
                   >
                     {slot.time}
                     {!slot.active && (
                       <span className="absolute inset-0 flex items-center justify-center bg-black/5 text-[8px] font-black uppercase tracking-tighter -rotate-12 translate-y-1 translate-x-1">
                         {slot.bookedBy ? 'Reservado' : 'Bloqueado'}
                       </span>
                     )}
                   </button>
                 ))
               ) : (
                 <div className="col-span-2 text-center py-10 text-text-sub italic text-sm">
                   Nenhum horário disponível para {selectedDoctor?.name} hoje.
                 </div>
               )}
            </div>

            <div className="flex gap-4">
               <button onClick={() => setStep(3)} className="flex-1 bg-surface border border-line text-text py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 active:scale-95 transition-all">
                  Voltar
               </button>
               <button onClick={handleFinalSubmit} className="flex-[2] bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all group">
                MARCAR CONSULTA
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">event_available</span>
              </button>
            </div>
          </motion.section>
        )}


        {step === 1 && (
          <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 pt-10">
             <div className="text-center">
                <span className="material-symbols-outlined text-primary text-6xl mb-4">person_search</span>
                <h2 className="text-xl font-black text-text uppercase tracking-tighter">Identificação do Paciente</h2>
                <p className="text-xs text-text-sub font-medium opacity-70 mt-2">Os dados abaixo foram detectados. Você pode alterá-los se necessário.</p>
             </div>
             <div className="bg-surface border border-line p-6 rounded-xl text-left flex flex-col gap-6 shadow-sm">
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-1">Nome Completo</label>
                   <div className="relative group">
                     <input 
                      className="w-full bg-bg border border-line h-12 px-10 rounded-md text-xs font-bold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      value={formData.patientName}
                      onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-sub opacity-50">person</span>
                     <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-black uppercase tracking-widest opacity-50 ml-1">CPF para Verificação</label>
                   <div className="relative group">
                     <input 
                      className="w-full bg-bg border border-line h-12 px-10 rounded-md text-xs font-bold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono" 
                      value={formData.patientCPF}
                      onChange={(e) => setFormData({...formData, patientCPF: e.target.value})}
                     />
                     <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sm text-text-sub opacity-50">badge</span>
                     <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
                   </div>
                </div>
             </div>
             <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setStep(2)} 
                  className="w-full bg-primary text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Confirmar e Continuar
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <p className="text-[9px] text-text-sub text-center opacity-50 font-bold uppercase tracking-widest">Segurança: Dados criptografados de ponta a ponta</p>
             </div>
          </motion.section>
        )}

        {step === 5 && (
          <motion.section initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-6 text-center pt-12 items-center">
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-green-200">
                <span className="material-symbols-outlined text-4xl">check</span>
             </div>
             <div>
                <h2 className="text-2xl font-black text-text uppercase tracking-tighter">Consulta Agendada!</h2>
                <p className="text-sm font-medium text-text-sub mt-2 leading-relaxed">
                  Olá, <span className="text-primary font-black uppercase">{formData.patientName}</span>. <br/>
                  Sua anamnese e horário ({formData.time}) já foram enviados ao <span className="font-bold text-text uppercase">{selectedDoctor?.name}</span>. <br/>
                  O médico terá acesso instantâneo ao seu histórico.
                </p>
             </div>
             
             <div className="w-full flex flex-col gap-4 max-w-sm">
                <div className="bg-[#f0f4ff] border border-primary/20 p-5 rounded-xl flex flex-col items-center gap-2 text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Código de Check-in</span>
                  <p className="text-4xl font-black text-primary tracking-widest">{checkInCode}</p>
                </div>

                <div className="bg-bg border border-line p-4 rounded-xl flex items-start gap-3 text-left">
                  <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text">Lembrete Importante</p>
                    <p className="text-[11px] font-medium text-text-sub mt-1">Apresente este código na <span className="font-bold text-text">recepção da clínica</span> ao chegar para agilizar seu check-in.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-left border-t border-line pt-4 mt-2">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase text-text-sub opacity-50">Horário</span>
                      <span className="text-xs font-black text-text">{formData.time}</span>
                   </div>
                   <div className="w-px h-6 bg-line"></div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase text-text-sub opacity-50">Profissional</span>
                      <span className="text-xs font-black text-text">{selectedDoctor?.name}</span>
                   </div>
                </div>
             </div>

             <button onClick={onBack} className="mt-8 text-text-sub font-black text-[11px] uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">home</span>
                Voltar ao Início
             </button>
          </motion.section>
        )}


        <footer className="flex flex-col items-center gap-2 py-10 opacity-30">
           <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Criptografia Militar</span>
           </div>
        </footer>
      </main>
    </div>
  );
};


const WhatsAppView = ({ onStart, onBack }: { onStart: () => void, onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-0 md:p-8">
      <div className="w-full max-w-md h-screen md:h-[800px] flex flex-col bg-[#e5ddd5] shadow-2xl relative overflow-hidden md:rounded-2xl border border-outline-variant">
        <header className="bg-[#075E54] text-white flex items-center justify-between px-4 py-3 shrink-0 z-10 shadow-md">
          <div className="flex items-center gap-3">
            <span onClick={onBack} className="material-symbols-outlined cursor-pointer hover:bg-white/10 p-1 rounded-full">arrow_back</span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-white/20">
               <span className="material-symbols-outlined text-[#075E54]">clinical_notes</span>
            </div>
            <div className="flex flex-col cursor-pointer" onClick={onBack}>
              <span className="font-bold text-md leading-none">AgiMed Clinic</span>
              <span className="text-[10px] font-semibold opacity-70 mt-1">Online agora</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <span className="material-symbols-outlined text-xl">videocam</span>
             <span className="material-symbols-outlined text-xl">call</span>
             <span className="material-symbols-outlined text-xl">more_vert</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 whatsapp-background">
          <div className="flex justify-center my-4">
            <span className="bg-[#D1E4EE] text-[#54656F] text-[10px] px-3 py-1.5 rounded-lg uppercase font-black tracking-widest shadow-sm">Hoje</span>
          </div>

          <div className="flex flex-col items-start max-w-[90%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm relative border border-black/5"
            >
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[12px] border-t-white border-l-[12px] border-l-transparent"></div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                <span className="text-[10px] font-black uppercase text-primary tracking-widest">AgiMed Assistant</span>
              </div>
              <div className="space-y-3">
                <p className="text-[14px] text-[#111b21] leading-relaxed">
                  Olá! Bem-vindo à <strong>AgiMed Clinic</strong>. 🏥
                </p>
                <p className="text-[14px] text-[#111b21] leading-relaxed">
                  Para reduzir sua espera e garantir um atendimento personalizado, solicitamos o preenchimento da nossa <strong>Anamnese Inteligente</strong>.
                </p>
                <p className="text-[14px] text-[#111b21] leading-relaxed italic opacity-80 decoration-primary/30 underline underline-offset-4">
                  Leva apenas 3 minutos.
                </p>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-[10px] text-[#667781] font-medium tracking-tighter">14:32</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col items-start max-w-[85%]"
          >
            <div className="bg-white rounded-2xl p-0 shadow-lg overflow-hidden border border-outline-variant/30">
               <div className="relative h-44 w-full">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1080" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                     <span className="text-white font-black text-xs uppercase tracking-widest shadow-black drop-shadow-md">AgiMed Check-in</span>
                  </div>
               </div>
               <div className="p-5 bg-white space-y-4">
                  <div>
                    <h3 className="text-[#111b21] font-bold text-md leading-tight">Anamnese Digital Estruturada</h3>
                    <p className="text-[#667781] text-xs leading-relaxed mt-1 font-medium italic">Clique abaixo para iniciar sua jornada de cuidado inteligente.</p>
                  </div>
                  <button 
                    onClick={onStart}
                    className="w-full py-3.5 bg-primary text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-all"
                  >
                    Iniciar Anamnese
                  </button>
               </div>
            </div>
          </motion.div>
        </main>

        <footer className="bg-[#F0F2F5] px-4 py-3 flex items-center gap-3 border-t border-outline-variant/30">
          <div className="flex items-center gap-4 text-[#54656F]">
            <span className="material-symbols-outlined hover:bg-black/5 p-1 rounded-full cursor-pointer">sentiment_satisfied</span>
            <span className="material-symbols-outlined hover:bg-black/5 p-1 rounded-full cursor-pointer">attach_file</span>
          </div>
          <div className="flex-1 bg-white rounded-full px-5 py-2.5 text-[#8696a0] text-[14px] flex justify-between items-center border border-black/5">
             <span>Escreva uma mensagem...</span>
          </div>
          <div className="w-12 h-12 bg-[#00A884] rounded-full flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
             <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

// --- Container Component ---

export default function AgiMedContainer() {
  const [activeTab, setActiveTab] = useState('landing');
  const [appointments, setAppointments] = useState<any[]>([]);
  
  const doctors = [
    { id: 'silva', name: 'Dr. Silva', specialty: 'Cardiologia', avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150' },
    { id: 'beatriz', name: 'Dra. Beatriz', specialty: 'Clínica Geral', avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' },
    { id: 'marcos', name: 'Dr. Marcos', specialty: 'Ortopedia', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150' },
    { id: 'juliana', name: 'Dra. Juliana', specialty: 'Dermatologia', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150' },
    { id: 'rodrigo', name: 'Dr. Rodrigo', specialty: 'Neurologia', avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150' },
    { id: 'ana', name: 'Dra. Ana', specialty: 'Ginecologia', avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=150' },
    { id: 'felipe', name: 'Dr. Felipe', specialty: 'Psiquiatria', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150' },
    { id: 'carla', name: 'Dra. Carla', specialty: 'Gastroenterologia', avatar: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?auto=format&fit=crop&q=80&w=150' },
    { id: 'andre', name: 'Dr. André', specialty: 'Urologia', avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=150' },
    { id: 'marina', name: 'Dra. Marina', specialty: 'Endocrinologia', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150' },
    { id: 'paulo', name: 'Dr. Paulo', specialty: 'Oftalmologia', avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=150' },
    { id: 'lucia', name: 'Dra. Lucia', specialty: 'Pediatria', avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150' }
  ];

  const initialSlots: Record<string, any[]> = {};
  doctors.forEach(doc => {
    initialSlots[doc.id] = [
      { time: '09:00', active: true },
      { time: '10:00', active: true },
      { time: '11:00', active: true },
      { time: '14:00', active: true },
      { time: '15:00', active: true },
      { time: '16:00', active: true },
    ];
  });

  const [availableSlotsPerDoctor, setAvailableSlotsPerDoctor] = useState<Record<string, any[]>>(initialSlots);
  
  // Listen for hash changes to allow direct links (e.g. app.com/#paciente)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#paciente') {
        setActiveTab('patient-anamnesis');
      } else if (window.location.hash === '#login') {
        setActiveTab('login');
      } else if (window.location.hash === '#whatsapp') {
        setActiveTab('whatsapp');
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setActiveTab('landing');
      }
    };
    
    handleHash(); // Check on mount
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const addAppointment = (newApp: any) => {
    setAppointments(prev => [newApp, ...prev]);
    // Mark slot as booked for the specific doctor
    setAvailableSlotsPerDoctor(prev => ({
      ...prev,
      [newApp.doctorId]: prev[newApp.doctorId].map(s => 
        s.time === newApp.entry ? { ...s, active: false, bookedBy: newApp.name } : s
      )
    }));
  };

  const toggleSlot = (doctorId: string, time: string) => {
    setAvailableSlotsPerDoctor(prev => ({
      ...prev,
      [doctorId]: prev[doctorId].map(s => 
        s.time === time ? { ...s, active: !s.active } : s
      )
    }));
  };

  const user = {
    name: "Dr. Silva",
    id: "CRM 12345-SP",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150"
  };

  const getTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Dashboard de Atendimentos';
      case 'patients': return 'Lista de Pacientes Ativos';
      case 'metrics': return 'Painel de Gestão e Métricas';
      case 'triagem': return 'Central de Triagem AI';
      default: return 'AgiMed';
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/10">
      <AnimatePresence mode="wait">
        {activeTab === 'landing' && (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
            <LandingView onSelectMode={(mode) => setActiveTab(mode === 'pro' ? 'login' : 'whatsapp')} />
          </motion.div>
        )}

        {activeTab === 'login' && (
          <motion.div key="login" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <LoginView 
              onLogin={() => setActiveTab('medical-term')} 
              onBack={() => setActiveTab('landing')}
            />
          </motion.div>
        )}

        {activeTab === 'medical-term' && (
          <motion.div key="term" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MedicalTermView 
              onAccept={() => setActiveTab('dashboard')} 
              onDecline={() => setActiveTab('landing')} 
              onBack={() => setActiveTab('login')}
            />
          </motion.div>
        )}

        {activeTab === 'whatsapp' && (
           <motion.div key="whatsapp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <WhatsAppView onStart={() => setActiveTab('patient-anamnesis')} onBack={() => setActiveTab('landing')} />
           </motion.div>
        )}

        {activeTab === 'patient-anamnesis' && (
           <motion.div key="patient" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
             <PatientView 
              onBack={() => setActiveTab('whatsapp')} 
              onComplete={addAppointment} 
              availableSlotsPerDoctor={availableSlotsPerDoctor} 
              doctors={doctors}
             />
           </motion.div>
        )}

        {['dashboard', 'patients', 'metrics', 'triagem'].includes(activeTab) && (
          <motion.div key="pro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />
            <TopBar 
              title={getTitle()} 
              user={user} 
              onBrandClick={() => setActiveTab('landing')} 
              onBack={() => {
                // If on a sub-view of pro, maybe go back to dashboard. 
                // For now, if we're on dashboard, go to login. Others go to dashboard.
                if (activeTab === 'dashboard') setActiveTab('login');
                else setActiveTab('dashboard');
              }}
            />
            
            <main>
              {activeTab === 'dashboard' && (
                <DashboardView 
                  setActiveTab={setActiveTab} 
                  newAppointments={appointments} 
                  availableSlots={availableSlotsPerDoctor['silva']}
                  onToggleSlot={(time) => toggleSlot('silva', time)}
                  onAddSlot={(time: string) => setAvailableSlotsPerDoctor(prev => ({
                    ...prev,
                    silva: [...prev['silva'], { time, active: true }].sort((a,b) => a.time.localeCompare(b.time))
                  }))}
                />
              )}

              {activeTab === 'metrics' && <MetricsView />}
              {activeTab === 'patients' && (
                 <div className="lg:pl-[240px] p-8 flex flex-col items-center justify-center min-h-[60vh] text-text-sub italic text-sm gap-4">
                    <p>Módulo de gestão de pacientes em carregamento...</p>
                    <div className="bg-surface border border-line p-4 rounded-xl not-italic text-center max-w-sm">
                      <p className="font-black text-[10px] uppercase tracking-widest text-primary mb-2">Dica de Atendimento</p>
                      <p className="text-xs mb-4">Envie o link de triagem direta para seus pacientes via WhatsApp:</p>
                      <button 
                        onClick={() => {
                          const url = `${window.location.origin}${window.location.pathname}#paciente`;
                          navigator.clipboard.writeText(url);
                          alert('Link de triagem copiado! Envie para o paciente.');
                        }}
                        className="bg-bg border border-primary/30 text-primary px-4 py-2 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                      >
                        Copiar Link de Triagem
                      </button>
                    </div>
                 </div>
              )}
              {activeTab === 'triagem' && (
                 <div className="lg:pl-[240px] p-8 flex flex-col items-center justify-center min-h-[60vh] text-text-sub italic text-sm gap-6">
                    <span className="material-symbols-outlined text-tertiary text-6xl animate-pulse">psychology</span>
                    <p>Central de Triagem AI monitorando fluxos ativos...</p>
                    <div className="flex gap-4 not-italic">
                       <button 
                        onClick={() => window.location.hash = 'paciente'}
                        className="bg-tertiary text-white px-6 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-lg shadow-tertiary/20"
                       >
                         Ver Visão do Paciente
                       </button>
                    </div>
                 </div>
              )}
            </main>

            {/* Float Action for Demo Switching (Hidden in production) */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
               <button 
                onClick={() => setActiveTab('whatsapp')}
                className="bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 font-black text-[10px] uppercase tracking-widest px-5"
               >
                 <span className="material-symbols-outlined text-sm">chat</span>
                 Simular Paciente
               </button>
               <button 
                className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
               >
                 <span className="material-symbols-outlined text-xl font-black">add</span>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
