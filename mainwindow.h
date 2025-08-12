#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QTimer>
#include <QLoggingCategory>
#include <memory>

Q_DECLARE_LOGGING_CATEGORY(dynoWindow)

QT_BEGIN_NAMESPACE
namespace Ui {
class MainWindow;
}
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow() override;

protected:
    void closeEvent(QCloseEvent *event) override;
    void showEvent(QShowEvent *event) override;

private slots:
    void updateStatus();
    void onSystemReady();

private:
    void setupUI();
    void setupConnections();
    
    std::unique_ptr<Ui::MainWindow> ui;
    std::unique_ptr<QTimer> statusTimer;
    bool systemInitialized{false};
};

#endif // MAINWINDOW_H
