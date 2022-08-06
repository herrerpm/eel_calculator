import eel

if __name__ == '__main__':
    # my code was here, before eel.init()
     eel.init('static_web_folder')
     eel.start('main.html', size=(600, 900))
