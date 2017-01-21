
$(function() {

var about = "\
	     	\n[[b;#d33682;]========= about ==========]\
	     	\n\
	     	\nAuthor : syui\
	     	\nNice to meet you. I am a computer novice.\
	     	\n\
	";
    var pacman_install_message_pre = "\
	\naliased to pacman -S test --noconfirm\
	\nresolving dependencies...\
	\nlooking for conflicting packages...\
	\n\
	\nPackages (1) test-1.0-2\
	\n\
	\nTotal Installed Size:  0.00 MiB\
	\n\
	\n:: Proceed with installation? [Y/n]y\
	\n(1/1) checking keys in keyring                       [#######################] 100%\
	\n(1/1) checking package integrity                     [#######################] 100%\
	\n(1/1) loading package files                          [#######################] 100%\
	\n(1/1) checking for file conflicts                    [#######################] 100%\
	\n(1/1) checking available disk space                  [#######################] 100%\
	\n(1/1) installing test                             [#######################] 100%\
	\nYou can try again using [[b;#d33682;]help].\
	\n ";
    var pacman_install_message_post = "";
    var pacman_start_message_post = "\n\
	\nYou can try again using [[b;#d33682;]pacman -S test].\
	\n \
	\nPress [[b;#859900;]enter (↩)] to install the pacman on this terminal.\
	\n";
    var pacman_update_message_post = "\
	\n:: Synchronizing package databases...\
	\n core is up to date\
	\n extra                                          1765.9 KiB  1796K/s 00:01 [#######################] 100%\
	\n community                                         3.2 MiB  3.10M/s 00:01 [#######################] 100%\
	\n archlinuxfr is up to date\
	\n:: Starting full system upgrade...\
	\n there is nothing to do\
    ";
    var prompt = "[[b;#d33682;]archie]@[[b;#6c71c4;]user] ~$ ";
    var nyan_command= prompt + 'curl -sL git.io/nyancat | bash';
    var days_left = Math.round((new Date('2016 01 01') - new Date())/(1000*60*60*24));
    var test_url = "https://syui.github.io/terminal";
    var rsvp_url = "https://mba-test.github.io/nyancat";
    var venue_address = "\
	\nAccess to the personal site\
    ";

  var os_pre = "\
	\n[[b;#d33682;]========= system ==========]\
  ";
  var system_hint = "\
  	\n\
  	\n{ hint : 'js,cookie = true' }\
  	\n{ hint : 'addon = false' }\
  	\n\
  ";
  var jai_weds_prerita = prompt + 'link' + '\
\n web : https://www.archlinuxjp.org \
\n github : https://github.com/archlinuxjp \
\n slack : https://archlinuxjp.slack.com \
\n docker : https://hub.docker.com/u/archlinuxjp \
\n gitbook : https://www.gitbook.com/@archlinuxjp \
\n blog : https://archlinuxjp.github.io/blog';
  var os_post = "\
	\n{ hint : Please access on [[b;#cb4b16;]" + "Arch Linux" + "]. }                 \
	\n\
  ";

  var test_help = "\
	Commands: \
	\n\t[[b;#268bd2;]test home]\
	\n\t[[b;#268bd2;]test link]\
	\n\t[[b;#268bd2;]test about]\
	\n\t[[b;#268bd2;]test system]\
	\n\t[[b;#268bd2;]test nyancat]\
  ";


  var link = "\
 web : https://www.archlinuxjp.org \
\n github : https://github.com/archlinuxjp \
\n slack : https://archlinuxjp.slack.com \
\n docker : https://hub.docker.com/u/archlinuxjp \
\n gitbook : https://www.gitbook.com/@archlinuxjp \
\n blog : https://archlinuxjp.github.io/blog";
  var rsvp = "\
      \nNyan Cat made with HTML5+CSS3 (and JavaScript :T).\
      \nhttps://mba-test.github.io/nyancat/\
      \n        \
  ";
  var you_are_late = ""
  if (days_left >= 0) {
    you_are_late = ''
  }
  var error_message = system_hint;
  var zsh_start_prompt ="\
      \nThis is the Z Shell configuration function for new users, zsh-newuser-install.\
      \nYou are seeing this message because you have no zsh startup files\
      \n(the files .zshenv, .zprofile, .zshrc, .zlogin in the directory\
      \n~).  This function can help you with a few settings that should\
      \nmake your use of the shell easier.\
      \n\
      \nYou can:\
      \n\
      \n(q)  Quit and do nothing.  The function will be run again next time.\
      \n\
      \n(0)  Exit, creating the file ~/.zshrc containing just a comment.\
      \n     That will prevent this function being run again.\
      \n\
      \n(1)  Continue to the main menu.\
      \n\
      \n[[b;#d33682;]--- Type one of the keys in parentheses --- q]\
  ";

  var greetings = jai_weds_prerita;
  var pacman_list_empty = '\n*** LOCAL pacmanS ***\n';
  var pacman_list_full = 'member\
      \nlink\
  ';
var print_pacman = pacman_start_message_post;
    function print_slowly(term, paragraph, callback) {
      var foo, i, lines;
      lines = paragraph.split("\n");
      term.pause();
      i = 0;
      foo = function(lines) {
        return setTimeout((function() {
          if (i < lines.length -1) {
            term.echo(lines[i]);
            i++;
            return foo(lines);
          } else {
            term.resume();
            return callback();
          }
        }), 100);
      };
      return foo(lines);
    };
    function require_command(command_regex, terminal_history) {
      var executed = false;
      $.each(terminal_history, function(index, value){
        if (command_regex.test(value)) {
          executed = true
        }
      });
      return executed;
        
    }
    var pacman_install_regex = /pacman +-S +test */ig;

    // Handle pacman command
    function pacman(inputs, term){
      // No second argument
      if (!inputs[1]) {
        term.echo(print_pacman);
      } else if (inputs[1] === '-S' && inputs[2] === 'test') {
        print_slowly(term, pacman_install_message_pre, function(){
          term.echo(pacman_install_message_post)
        });
      } else if (inputs[1] === '-Syu') {
        print_slowly(term, pacman_update_message_post);
      } else if (inputs[1] === '-V') {
        term.echo('4.2.1');
      } else if (inputs[1] == '-Q') {
        // if history has install test
        term.echo(pacman_list_full);
        // else
        // term.echo(pacman_list_empty)
      } else {
        term.echo(inputs.join(" ") + " is not a valid command")
      }
    }

    // Handle test command
    function test(inputs, term){
      if (!inputs[1]) {
        term.echo(test_help);
      } else if (inputs[1] === "about") {
        term.echo(about);
      } else if (inputs[1] === "link") {
        term.echo(link)
      } else if (inputs[1] === "ifconfig") {
        term.echo(ifconfig)
      } else if (inputs[1] === "help") {
        term.echo(os_pre);
        term.echo("[[;#b58900;]"+ganesha+ "]");
        term.pause();
        setTimeout(function(){
          term.resume();
          //term.echo(jai_weds_prerita);
          term.pause();
          setTimeout(function(){
            term.resume();
            term.echo(os_post);
          }, 400)
        }, 500)
        
      } else if (inputs[1] === "home") {
        term.echo(venue_address);
        term.echo(test_url);
        term.push(function(command, term) {
          if (/y(es){0,1}/.test(command)) {
            window.open(
              test_url,
              '_blank'
            );
          }
          term.pop();
        }, {
          prompt: 'Do you want to open this home in the browser? (yes/no) ',
          greetings: null
        });
      } else if (inputs[1] === "nyancat") {
        term.echo(rsvp)
        term.push(function(command, term) {
          window.open(
              rsvp_url,
              '_blank'
          );
          term.pop();
        }, {
          prompt: 'alternatively send me a browser in a new window when you press [[b;#859900;]enter (↩)]',
          greetings: null
        });
      } else {
        term.error(inputs.join(" ") + " is not a valid command")
      }
    }

    // Main interpreter function
    function interpreter(input, term) {
      var command, inputs;
      inputs = input.split(/ +/)
      command = inputs[0];
      if (command === "pacman") {
        pacman(inputs, term);
      } else if (command === "test" || command === "help") {
        window.terminal = term;
        if (require_command(pacman_install_regex, term.history().data())) {
          test(inputs, term);
        } else {
          term.echo("\"[[b;#6c71c4;]Hello World !]\"\nPress [[b;#d33682;]tab ↩]");
        }
      } else if (/(cd)|(cat)/.test(command)) {
        bash(inputs, term);
      } else if (input === "Pacman -V"){
        term.echo("2.3.0");
      } else if (/which +test/.test(input)) {
        if (require_command(pacman_install_regex, term.history().data())) {
          term.echo("/usr/bin/test");
        } // else do nothing
      } else if (/which/.test(input)) {
        term.echo("You can try again using [[b;#d33682;]which test].");
      } else if (/zsh/.test(input)) {
        term.echo(zsh_start_prompt);
      } else if (/error/.test(input)) {
        term.echo(error_message);
      } else if (/nyan/.test(input)) {
        term.echo(nyan_command);
      } else if (/whoami/.test(input)) {
        term.echo("archie");
      } else if (/toilet title/.test(input)) {
        term.echo(greetings);
      } else if (/toilet/.test(input)) {
        term.echo("You can try again using [[b;#d33682;]toilet title].");
      } else if (/about/.test(input)) {
        term.echo(about);
      } else if (/link/.test(input)) {
        term.echo(link);
      } else if (/help/.test(input)) {
        term.echo("[[;#b58900;]"+ganesha+ "]"+os_post);
      } else if (/prompt/.test(input)) {
        term.echo(prompt_origin);
      } else if (/ifconfig/.test(input)) {
        term.echo(ifconfig);
      } else if (/uname/.test(input)) {
        term.echo("Linux");
      } else if (command.length === 0) {
        // do nothing
	} else if (/ls \/usr\/bin/.test(input)) {
        term.echo(pacman_list_full);
	} else if (/member/.test(input)) {
        term.echo(" Fra9ment \
		\n kusakata \
		\n syui \
		\n trileg \
		");
      } else {
        term.error(command + " is not a valid command");
      }
    }

    // Handle bash commands
    function bash(inputs, term) {
      var argument, echo, insert;

      echo = term.echo;
      insert = term.insert;
      if (!inputs[1]) {
        return console.log("none");
      } else {
        argument = inputs[1];
        if (/^\.\./.test(argument)) {
          return echo("-bash: cd: " + argument + ": Permission denied");
        } else {
          return echo("-bash: cd: " + argument + ": No such file or directory");
        }
      }
    };

    $('#terminal').terminal( interpreter, {
      prompt: prompt,
      name: 'test',
      greetings: greetings,
      height: 600,
      onInit: function(term){
        term.insert("help");
        term.history().clear();
      },
      completion: function(term, string, callback){
        callback([
	  'link',
          'help',
          'member']);
      },
      tabcompletion: true
    });

});
