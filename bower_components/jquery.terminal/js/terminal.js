$(function(){function adBlockNotDetected(){}function adBlockDetected(){}if(typeof fuckAdBlock==='undefined'){adBlockDetected();}else{fuckAdBlock.on(true,adBlockDetected).onNotDetected(adBlockNotDetected);}fuckAdBlock.setOption({debug:false,checkOnLoad:true,resetOnEnd:true});if(window.location.protocol=="http:"&&Object.keys(fuckAdBlock).length==0){ifconfig="adon -> stop ublock!";}else if(window.location.protocol=="http:"){$.get("//ipinfo.io",function(response){IP=response.ip;Hostname=response.hostname;Loc=response.loc;Country=response.country;ifconfig="You :\n\tIP : "+IP+",\n\tHostname : "+Hostname+",\n\tCountry : "+Country+",\n\tLoc : "+Loc;username=Country+":"+IP;prompt_origin="[[b;#d33682;]root]@[[b;#6c71c4;]"+username+"] ~$ ";user=IP;},"jsonp");}else{user="user";ifconfig="The command to check your IP address! -> https://ipinfo.io\n[enable]\nprotocol -> http\nhttp://syui.gitlab.io/\nadon -> stop ublock!";};var w="\
		\nUSER     TTY      FROM\
		\nroot     console  author\
	     	\n\
	";var pacman_install_message_pre="\
	\naliased to pacman -S test --noconfirm\
	\nresolving dependencies...\
	\nlooking for conflicting packages...\
	\n\
	\nPackages (1) test\
	\n\
	\nTotal Installed Size:  0.01 MiB\
	\n\
	\n:: Proceed with installation? [Y/n]y\
	\n(1/1) checking keys in keyring                       [#######################] 100%\
	\n(1/1) checking package integrity                     [#######################] 100%\
	\n(1/1) loading package files                          [#######################] 100%\
	\n(1/1) checking for file conflicts                    [#######################] 100%\
	\n(1/1) checking available disk space                  [#######################] 100%\
	\n(1/1) installing test                                [#######################] 100%\
	\n ";var pacman_install_message_post="";var pacman_start_message_post="\n\
	\nYou can try again using [[b;#d33682;]pacman -Q].\
	\n \
	\nPress [[b;#859900;]enter (↩)] to install the pacman on this terminal.\
	\n";var pacman_update_message_post="\
	\n:: Synchronizing package databases...\
	\n core is up to date\
	\n extra                                          1765.9 KiB  1796K/s 00:01 [#######################] 100%\
	\n community                                         3.2 MiB  3.10M/s 00:01 [#######################] 100%\
	\n archlinuxfr is up to date\
	\n:: Starting full system upgrade...\
	\n there is nothing to do\
    ";var prompt="[[b;#d33682;]root]@[[b;#6c71c4;]user] ~$ ";var nyan_command=prompt+'curl -sL git.io/nyancat | bash';var days_left=Math.round((new Date('2016 01 01')-new Date())/(1000*60*60*24));var test_url="";var rsvp_url="";var venue_address="\
	\nAccess to the personal site\
    ";var os_pre="\
	\n[[b;#d33682;]========= system ==========]\
  ";var os_post="\
	\n{ hint : Please access on [[b;#cb4b16;]"+"Arch Linux"+"]. }                 \
	\n\
  ";var test_help=" [[b;#268bd2;]syui, w, ifconfig, clear, exit, pacman] ";var syui_command="syui about\
      \nsyui link\
  ";var syui_link="blog : https://syui.gitlab.io\
      \ngitlab : https://gitlab.com/syui \
      \ngithub : https://github.com/syui \
  ";var rsvp="\
      \nNyan Cat made with HTML5+CSS3 (and JavaScript :T).\
      \nhttps://mba-hack.github.io/nyancat/\
      \n        \
  ";var you_are_late=""
if(days_left>=0){you_are_late=''}var zsh_start_prompt=" user : syui\
	\n site : https://syui.gitlab.io \
	\n I am a beginner.\
  ";var syui_about=zsh_start_prompt;var greetings=you_are_late
var pacman_list_empty='\n*** LOCAL pacmanS ***\n';var pacman_list_full='syui\
      \nifconfig\
      \nw\
      \npacman\
      \nwhoami\
      \nwhich\
  ';var print_pacman='Please install the pacman first by executing\n"pacman -S test"\n"pacman -Syu"\n"pacman -V"\n"pacman -Q"\nhttps://www.archlinux.org/pacman/';function print_slowly(term,paragraph,callback){var foo,i,lines;lines=paragraph.split("\n");term.pause();i=0;foo=function(lines){return setTimeout((function(){if(i<lines.length-1){term.echo(lines[i]);i++;return foo(lines);}else{term.resume();return callback();}}),100);};return foo(lines);};function require_command(command_regex,terminal_history){var executed=true;$.each(terminal_history,function(index,value){if(command_regex.test(value)){executed=true}});return executed;}var pacman_install_regex=/pacman +-S +test */ig;function pacman(inputs,term){if(!inputs[1]){term.echo(print_pacman);}else if(inputs[1]==='-S'&&inputs[2]==='test'){print_slowly(term,pacman_install_message_pre,function(){term.echo(pacman_install_message_post)});}else if(inputs[1]==='-Syu'){print_slowly(term,pacman_update_message_post);}else if(inputs[1]==='-V'){term.echo('5.0.1');}else if(inputs[1]=='-Q'){term.echo(pacman_list_full);}else{term.echo(inputs.join(" ")+" is not a valid command")}}function test(inputs,term){if(!inputs[1]){term.echo(test_help);}else if(inputs[1]==="syui about"){term.echo(syui_about);}else if(inputs[1]==="syui link"){term.echo(syui_link)}else if(inputs[1]==="syui"){term.echo(syui_command);}else if(inputs[1]==="ifconfig -a"){term.echo(ifconfig);}else if(inputs[1]==="ifconfig"){term.echo(ifconfig)}else if(inputs[1]==="system"){term.echo(os_pre);term.echo("[[;#b58900;]"+ganesha+"]");term.pause();setTimeout(function(){term.resume();term.pause();setTimeout(function(){term.resume();term.echo(os_post);},400)},500)}else if(inputs[1]==="home"){term.echo(venue_address);term.echo(test_url);term.push(function(command,term){if(/y(es){0,1}/.test(command)){window.open(test_url,'_blank');}term.pop();},{prompt:'Do you want to open this home in the browser? (yes/no) ',greetings:null});}else if(inputs[1]==="nyancat"){term.echo(rsvp)
term.push(function(command,term){window.open(rsvp_url,'_blank');term.pop();},{prompt:'alternatively send me a browser in a new window when you press [[b;#859900;]enter (↩)]',greetings:null});}else{term.error(inputs.join(" ")+" is not a valid command")}}function interpreter(input,term){var command,inputs;inputs=input.split(/ +/)
command=inputs[0];if(command==="pacman"){pacman(inputs,term);}else if(command==="test"||command==="help"){window.terminal=term;if(require_command(pacman_install_regex,term.history().data())){test(inputs,term);}else{term.error('Please install the pacman first by executing\npacman -S test');}}else if(/(cd)|(cat)/.test(command)){bash(inputs,term);}else if(input==="ruby -v"){term.echo("2.3.0");}else if(/which +test/.test(input)){if(require_command(pacman_install_regex,term.history().data())){term.echo("/usr/bin/test");}}else if(/which/.test(input)){term.echo("You can try again using [[b;#d33682;]which test].");}else if(/zsh/.test(input)){term.echo(zsh_start_prompt);}else if(/nyan/.test(input)){term.echo(nyan_command);}else if(/whoami/.test(input)){term.echo("root");}else if(/toilet/.test(input)){term.echo("You can try again using [[b;#d33682;]toilet test].");}else if(/syui link/.test(input)){term.echo(syui_link);}else if(/syui about/.test(input)){term.echo(syui_about);}else if(/syui/.test(input)){term.echo(syui_command);}else if(/w/.test(input)){term.echo(w);}else if(/prompt/.test(input)){term.echo(prompt_origin);}else if(/ifconfig -a/.test(input)){term.echo(ifconfig);}else if(/ifconfig/.test(input)){term.echo(ifconfig);}else if(/uname -a/.test(input)){term.echo("Linux 4.6.3-1-ARCH x86_64 GNU/Linux");}else if(/uname/.test(input)){term.echo("Linux");}else if(command.length===0){}else if(/ls \/usr\/bin/.test(input)){term.echo(pacman_list_full);}else if(/ls/.test(input)){term.echo("You can try again using [[b;#d33682;]ls /usr/bin].");}else{term.error(command+" is not a valid command");}}function bash(inputs,term){var argument,echo,insert;echo=term.echo;insert=term.insert;if(!inputs[1]){return console.log("none");}else{argument=inputs[1];if(/^\.\./.test(argument)){return echo("-bash: cd: "+argument+": Permission denied");}else{return echo("-bash: cd: "+argument+": No such file or directory");}}};$('#terminal').terminal(interpreter,{prompt:prompt,name:'test',greetings:greetings,height:300,onInit:function(term){term.insert("help");term.history().clear();},completion:function(term,string,callback){callback(['syui','w','help','pacman','ifconfig']);},tabcompletion:true});});
