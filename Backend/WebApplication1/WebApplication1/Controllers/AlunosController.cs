using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Exceções;
using WebApplication1.Interface;
using WebApplication1.Models;
using WebApplication1.Services;
using WebApplication1.Shared;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private IOpAluno _serviceAluno;

        public AlunosController(IOpAluno serviceAluno)
        {
            _serviceAluno = serviceAluno;
        }

        // GET: api/AllItems
        [HttpGet("Alunos")]
        public ActionResult<List<Aluno>> GetAllAlunos()
        {
            var alunos = _serviceAluno.GetAlunos();
            return Ok(alunos);
        }

        [HttpGet("MediaTurma")]
        public ActionResult<List<Aluno>> GetAvgNotas()
        {
            var alunos = _serviceAluno.GetAvgClass();
            return Ok(alunos);
        }


        [HttpGet("PlusAvg")]
        public ActionResult<List<Aluno>> GetAlunosPlusAvg()
        {
            var alunosPlus = _serviceAluno.AlunoPlusAvg();
            return Ok(alunosPlus);
        }


        [HttpGet("UnderAttendance")]
        public ActionResult<List<Aluno>> GetUnderAttendance()
        {
            var alunosUnder = _serviceAluno.GetUnder();
            return Ok(alunosUnder);
        }


        [HttpPost("Insert")]
        public ActionResult<Aluno> InserirAluno(Aluno? aluno)
        {
            try
            {
                if (aluno != null)
                {
                    var alunoInserido = _serviceAluno.AddAluno(aluno);
                    _serviceAluno.SalvarAlunos();
                    return Ok(alunoInserido);
                }
            }
            catch (Exception ex) { 
            }
            
            return BadRequest("Erro ao inserir aluno");
        }


        [HttpDelete("{name}")]
        public ActionResult<Aluno> DeleteAluno(string name)
        {
            try
            {
               var aluno = _serviceAluno.DeleteAluno(name);
               if(aluno != null)
                    return Ok(aluno);

                throw new ErroAoDeletarException(string.Format(Constantes.Exceptions.ErroAoDeletar, name));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("DeleteAll")]
        public ActionResult DeleteAllAluno()
        {
            _serviceAluno.DeleteAll();
            return Ok();
        }

    }
}
