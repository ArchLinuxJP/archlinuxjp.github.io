$(function() {
    var pacman_install_message_post = "";
    var prompt = "[[b;#d33682;]user]@[[b;#6c71c4;]archlinuxjp.github.io] ~$ ";
    var days_left = Math.round((new Date('2016 01 01') - new Date()) / (1000 * 60 * 60 * 24));
    var test_url = "link";
    var rsvp_url = "";
    var test_help = "Press [[b;#d33682;]<Tab>]";

    axios.get('https://archlinuxjp.github.io/json/link.json', { 'Content-Type': 'application/json' })
    .then(function (response) {
      archlinuxjp_link = JSON.stringify(response.data,null,"\t");
      data = JSON.parse(archlinuxjp_link);
      let url;
      for(var i in data){
	if (data[i].url) {
		      archlinuxjp_link += "\n" + data[i].url + "\n";
	}
      };
      console.log(archlinuxjp_link);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    var you_are_late = ""
    if (days_left >= 0) {
        you_are_late = ''
    }

    var greetings = you_are_late

    var ls_data = '/json/link.json\n/json/member.json ';
    axios.get('https://api.github.com/orgs/archlinuxjp/public_members', { 'Content-Type': 'application/json' })
    .then(function (response) {
      archlinuxjp_member = JSON.stringify(response.data,null,"\t");
      data = JSON.parse(archlinuxjp_member);
      archlinuxjp_member = "";
      let login,html_url;
      for(var i in data){
	if (data[i].login) {
		      archlinuxjp_member += "\n" + data[i].login + "\n" + data[i].html_url + "\n";
	}
      };
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    function print_slowly(term, paragraph, callback) {
        var foo, i, lines;
        lines = paragraph.split("\n");
        term.pause();
        i = 0;
        foo = function(lines) {
            return setTimeout((function() {
                if (i < lines.length - 1) {
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
        var executed = true;
        $.each(terminal_history, function(index, value) {
            if (command_regex.test(value)) {
                executed = true
            }
        });
        return executed;
    }
    HTMLAudioElement.prototype.stop = function()
    {
        this.pause();
        this.currentTime = 0.0;
    }
    function interpreter(input, term) {
        var command, inputs;
	var myAudio = new Audio();
        inputs = input.split(/ +/)
        command = inputs[0];
        if (input === "ls /json") {
            term.echo("/json/link.json");
        } else if (inputs[0] === 'ls /json/link.json') {
            term.echo("ls /json/link.json");
        } else if (inputs[0] === 'cat' && inputs[1] === '/json/link.json') {
            term.echo(archlinuxjp_link);
        } else if (inputs[0] === 'cat' && inputs[1] === '/json/member.json') {
            term.echo(archlinuxjp_member);
        } else if (inputs[0] === 'help') {
            term.echo(test_help);
        } else if (inputs[0] === 'ls') {
            term.echo(ls_data);
        } else if (inputs[0] === 'cat') {
            term.echo("/json/link.json");
        } else if (inputs[0] === '/json/member.json') {
            term.echo(archlinuxjp_member);
        } else if (inputs[0] === '/json/link.json') {
            term.echo(archlinuxjp_link);
        } else if (inputs[0] === 'member') {
            term.echo(archlinuxjp_member);
        } else if (inputs[0] === 'link') {
            term.echo(archlinuxjp_link);
        } else if (/(cd)/.test(command)) {
            bash(inputs, term);
        } else if (/whoami/.test(input)) {
            term.echo("user");
        } else if (/uname/.test(input)) {
            term.echo("Linux");
        } else if (command.length === 0) {} else if (/ls/.test(input)) {
            term.echo(pacman_list_full);
        } else if (/ls/.test(input)) {
            term.echo(pacman_list_full);
        } else {
            term.error(command + " is not a valid command");
        }
    }

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

    $('#terminal').terminal(interpreter, {
        prompt: prompt,
        name: 'test',
        greetings: greetings,
        height: 400,
        onInit: function(term) {
            term.insert("cat /json/link.json");
            term.history().clear();
        },
        completion: function(term, string, callback) {
		var t = $(term[0]).text();
		if (t.match(/cat/)) {
            		callback(["/json/link.json","/json/member.json","help","ls","cat","link","member"]);
		} else if (t.match(/help/)){
            		callback(["help","ls","cat","link","member"]);
		} else {
            		callback(["help","ls","cat","link","member"]);
		}
        },
        tabcompletion: true
    });
});
