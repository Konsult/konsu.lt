desc 'kill rails'
task :killrails do
  pid_file = 'tmp/pids/server.pid'
  if File.file?(pid_file)
    print "Shutting down Rails\n"
    pid = File.read(pid_file).to_i
    Process.kill "INT", pid
  end
  File.file?(pid_file) && File.delete(pid_file)
end