// Copie o conteúdo do LandingPage.jsx do projeto mobile aqui para usar como landing page principal.
import React from "react";

const styles = {
  body: {
    margin: 0,
    fontFamily: "Segoe UI",
    background: "#fff",
    minHeight: "100vh",
    color: "#200349",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100vw",
    boxSizing: "border-box",
  },
  header: {
    background: "#60A8B1",
    color: "#fff",
    padding: "32px 0 16px 0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    letterSpacing: 1,

    marginBottom: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  logo: {
    width: 100,
    borderRadius: 24,
    objectFit: "contain",
    marginRight: 16,
  },
  section: {
    background: "#fff",
    borderRadius: 16,
    padding: 32,
    width: "100%",
    maxWidth: 420,
    margin: "0 auto",
    boxShadow: "0 2px 16px #34366922",
    marginBottom: 32,
    textAlign: "center",
    boxSizing: "border-box",
  },
  button: {
    background: "#343669",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "16px 32px",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    cursor: "pointer",
    boxShadow: "0 2px 8px #34366922",
    transition: "background 0.2s",
    width: "100%",
    maxWidth: 320,
  },
  footer: {
    width: "100%",
    marginTop: "auto",
    padding: 24,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    background: "#343669",
    boxSizing: "border-box",
  },
};

export default function LandingPage() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src="/assets/app_logo_header.png"
            alt="Logo AcheiPsi"
            style={styles.logo}
            width={100}
            height={80}
          />
          <span style={{ fontSize: 36, fontWeight: "bold", letterSpacing: 1, lineHeight: 1 }}>
            AcheiPsi
          </span>
        </div>
      </header>
      <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
        <section style={styles.section} aria-labelledby="acheipsi-title">
          <h2
            id="acheipsi-title"
            style={{
              color: "#343669",
              fontWeight: 700,
              fontSize: 28,
              marginBottom: 16,
            }}
            tabIndex={0}
          >
            Encontre atendimento psicológico acessível
          </h2>
          <p style={{ color: "#343669", fontSize: 18, marginBottom: 16 }}>
            O AcheiPsi conecta você a instituições e profissionais que oferecem
            psicoterapia gratuita ou a preços sociais, além de conteúdos de
            psicoeducação.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.jamesmaclean.acheiPsi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixe o app na Play Store (abre em nova aba)"
            style={{ display: "inline-block", width: "100%", maxWidth: 320 }}
          >
            <button
              style={{
                ...styles.button,
                background: "#bdbdbd",
                color: "#fff",
                cursor: "not-allowed",
                opacity: 0.7,
              }}
              tabIndex={0}
              disabled
            >
              Baixe o app na Play Store (em breve)
            </button>
          </a>
        </section>
        <section style={styles.section} aria-labelledby="apk-title">
          <h2
            id="apk-title"
            style={{
              color: "#343669",
              fontWeight: 700,
              fontSize: 24,
              marginBottom: 12,
            }}
            tabIndex={0}
          >
            Baixe o APK do AcheiPsi
          </h2>
          <p style={{ color: "#343669", fontSize: 16, marginBottom: 12 }}>
            O app ainda não está disponível na Play Store, mas você pode instalar a versão APK diretamente no seu celular Android.
          </p>
          <a
            href="/acheipsi.apk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar APK do AcheiPsi (abre em nova aba)"
            style={{ display: "inline-block", width: "100%", maxWidth: 320 }}
          >
            <button style={styles.button} tabIndex={0}>
              Baixar APK
            </button>
          </a>
          <div style={{ textAlign: "left", marginTop: 20, fontSize: 15, color: "#343669" }}>
            <strong>Como instalar o APK:</strong>
            <ol style={{ margin: "12px 0 0 20px", padding: 0 }}>
              <li>Baixe o arquivo APK pelo botão acima.</li>
              <li>Ao finalizar o download, abra o arquivo no seu celular.</li>
              <li>Se aparecer um aviso de segurança, clique em <b>Configurações</b> e habilite a opção <b>Permitir instalação de apps de fontes desconhecidas</b> para o navegador usado.</li>
              <li>Confirme a instalação e aguarde o término.</li>
              <li>Abra o AcheiPsi normalmente pelo ícone no seu celular.</li>
            </ol>
            <p style={{ marginTop: 8, fontSize: 14, color: "#888" }}>
              <b>Dica:</b> Após instalar, você pode desabilitar novamente a permissão de fontes desconhecidas para maior segurança.
            </p>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <span>
          © {new Date().getFullYear()} AcheiPsi · contato:
          <a href="mailto:diovanara@alu.unifase-rj.edu.br" style={{ color: "#fff", textDecoration: "underline" }}>
            diovanara@alu.unifase-rj.edu.br
          </a>
        </span>
      </footer>
    </div>
  );
}
