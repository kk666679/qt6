#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include <QCloseEvent>
#include <QShowEvent>
#include <QStatusBar>
#include <QMessageBox>

Q_LOGGING_CATEGORY(dynoWindow, "dyno.window")

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(std::make_unique<Ui::MainWindow>())
    , statusTimer(std::make_unique<QTimer>(this))
{
    setupUI();
    setupConnections();
    qCInfo(dynoWindow) << "MainWindow constructed";
}

MainWindow::~MainWindow()
{
    qCInfo(dynoWindow) << "MainWindow destroyed";
}

void MainWindow::setupUI()
{
    ui->setupUi(this);
    setWindowTitle(tr("DYNO - Motorcycle Dynamometer v2.1"));
    statusBar()->showMessage(tr("System initializing..."));
}

void MainWindow::setupConnections()
{
    connect(statusTimer.get(), &QTimer::timeout, this, &MainWindow::updateStatus);
    statusTimer->start(1000); // Update every second
}

void MainWindow::closeEvent(QCloseEvent *event)
{
    if (systemInitialized) {
        auto reply = QMessageBox::question(this, tr("Exit DYNO"),
                                         tr("Are you sure you want to exit?"),
                                         QMessageBox::Yes | QMessageBox::No);
        if (reply == QMessageBox::Yes) {
            event->accept();
        } else {
            event->ignore();
        }
    } else {
        event->accept();
    }
}

void MainWindow::showEvent(QShowEvent *event)
{
    QMainWindow::showEvent(event);
    QTimer::singleShot(2000, this, &MainWindow::onSystemReady);
}

void MainWindow::updateStatus()
{
    if (systemInitialized) {
        statusBar()->showMessage(tr("System ready - Connected"));
    }
}

void MainWindow::onSystemReady()
{
    systemInitialized = true;
    statusBar()->showMessage(tr("System ready"));
    qCInfo(dynoWindow) << "System initialization complete";
}
