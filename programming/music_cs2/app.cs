using System;
using System.Media;
using System.Windows.Forms;

namespace ReproductorDeAudio
{
    public partial class Form1 : Form
    {
        private SoundPlayer soundPlayer;
        
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            soundPlayer = new SoundPlayer(@"ruta_del_archivo.mp3"); // Coloca la ruta completa de tu archivo MP3 aquí
        }

        private void playButton_Click(object sender, EventArgs e)
        {
            soundPlayer.Play();
        }

        private void pauseButton_Click(object sender, EventArgs e)
        {
            soundPlayer.Stop();
        }
    }
}
